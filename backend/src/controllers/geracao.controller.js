import { prisma } from "../config/prisma.js";
import { generateWithGemini } from "../services/gemini.js";
import { RecipeError, requestContext, isCompatible, validateRecipe } from "../services/recipe-rules.js";
import { aiConfig, generationKey, limits, reserve } from "../services/generation-usage.js";

function sendError(res, error) {
  const known = error instanceof RecipeError;
  if (!known) console.error("generation_error", { code: error.code || "INTERNAL" });
  if (error.retryAfterSeconds) res.set("Retry-After", String(error.retryAfterSeconds));
  return res.status(known ? error.status : 500).json({ code: known ? error.code : "ERRO_INTERNO",
    message: known ? error.message : "Não foi possível concluir a operação. Tente novamente.",
    ...(error.retryAfterSeconds ? { retryAfterSeconds: error.retryAfterSeconds } : {}) });
}

export function createGenerationController(db = prisma, provider = generateWithGemini, getConfig = aiConfig) {
  return {
    async status(req, res) {
      try {
        const config = getConfig();
        if (!config.enabled) return res.json({ disponivel: false, code: "IA_INDISPONIVEL", message: "A geração com IA está desativada ou não configurada." });
        try { await limits(db, Number(req.user.id), config); }
        catch (error) {
          if (!(error instanceof RecipeError)) throw error;
          return res.json({ disponivel: true, podeGerar: false, code: error.code, message: error.message, retryAfterSeconds: error.retryAfterSeconds });
        }
        return res.json({ disponivel: true, podeGerar: true });
      } catch (error) { return sendError(res, error); }
    },
    async generate(req, res) {
      let record;
      const started = Date.now();
      try {
        const config = getConfig();
        if (!config.enabled) throw new RecipeError("IA_INDISPONIVEL", "A geração com IA está indisponível. Use a busca no banco.", 503);
        const userId = Number(req.user.id);
        const user = await db.usuario.findUnique({ where: { id: userId }, include: { perfil: { include: { restricoes: true } }, inventario: { include: { ingrediente: true } } } });
        if (!user) throw new RecipeError("USUARIO_INEXISTENTE", "Usuário não encontrado.", 404);
        const context = requestContext(req.body, user.inventario, user.perfil);
        const { selected, profile, filters } = context;
        const catalog = filters.allowMissing ? await db.ingrediente.findMany({ orderBy: { id: "asc" } }) : selected.map((item) => item.ingrediente);
        const allowed = catalog.filter((item) => isCompatible(item, profile.tipoDieta, profile.restricoes));
        const key = generationKey(context, allowed, config.model);
        const cached = await db.receitaGeracao.findFirst({ where: { usuarioId: userId, chaveCache: key, status: { in: ["SUCESSO", "SALVO"] }, cacheExpiraEm: { gt: new Date() }, rascunhoExpiraEm: { gt: new Date() } }, orderBy: { criadaEm: "desc" } });
        if (cached) return res.json({ geracao: { id: cached.id, receita: cached.payload, reutilizada: true, expiraEm: cached.rascunhoExpiraEm } });
        record = await reserve(db, userId, key, config);
        const { parsed, consumo } = await provider({ config, ...context, allowed });
        const recipe = validateRecipe(parsed, selected, allowed, filters);
        const now = new Date();
        const expires = new Date(now.getTime() + config.draft * 1000);
        const updated = await db.receitaGeracao.updateMany({ where: { id: record.id, status: "EM_ANDAMENTO", reservaExpiraEm: { gt: now } }, data: {
          status: "SUCESSO", payload: recipe, consumo, reservaExpiraEm: null,
          cacheExpiraEm: new Date(now.getTime() + config.cache * 1000), rascunhoExpiraEm: expires,
          finalizadaEm: now, duracaoMs: Date.now() - started } });
        if (!updated.count) throw new RecipeError("TIMEOUT", "O prazo da geração expirou. Tente novamente.", 504);
        return res.json({ geracao: { id: record.id, receita: recipe, reutilizada: false, expiraEm: expires } });
      } catch (error) {
        if (record) {
          try { await db.receitaGeracao.updateMany({ where: { id: record.id, status: "EM_ANDAMENTO" }, data: { status: "ERRO", erroCodigo: error instanceof RecipeError ? error.code : "ERRO_INTERNO", reservaExpiraEm: null, finalizadaEm: new Date(), duracaoMs: Date.now() - started } }); }
          catch { console.error("generation_record_update_failed", { id: record.id }); }
        }
        return sendError(res, error);
      }
    },
    async save(req, res) {
      try {
        const id = Number(req.params.id);
        const userId = Number(req.user.id);
        if (!Number.isSafeInteger(id) || id < 1) throw new RecipeError("ID_INVALIDO", "Rascunho inválido.");
        const result = await db.$transaction(async (tx) => {
          await tx.$queryRaw`SELECT id FROM receita_geracoes WHERE id = ${id} AND usuarioId = ${userId} FOR UPDATE`;
          const generation = await tx.receitaGeracao.findFirst({ where: { id, usuarioId: userId } });
          if (generation?.status === "SALVO" && generation.receitaId) {
            const recipe = await tx.receita.findFirst({ where: { id: generation.receitaId, usuarioId: userId }, include: { ingredientes: { include: { ingrediente: true } } } });
            if (!recipe) throw new RecipeError("RECEITA_REMOVIDA", "A receita salva foi removida.", 404);
            return { receita: recipe, idempotente: true };
          }
          if (!generation?.payload || generation.status !== "SUCESSO" || !generation.rascunhoExpiraEm || generation.rascunhoExpiraEm <= new Date()) throw new RecipeError("RASCUNHO_EXPIRADO", "Rascunho não encontrado ou expirado.", 404);
          const payload = generation.payload;
          const recipe = await tx.receita.create({ data: { usuarioId: userId, titulo: payload.titulo, modoPreparo: payload.passos.join("\n"), tempoEstimado: payload.tempoEstimado, porcoes: payload.porcoes, publica: false, geradaPorIA: true,
            ingredientes: { create: payload.ingredientes.map(({ ingredienteId, quantidade, unidade, opcional }) => ({ ingredienteId, quantidade, unidade, opcional })) } }, include: { ingredientes: { include: { ingrediente: true } } } });
          await tx.receitaGeracao.update({ where: { id }, data: { status: "SALVO", receitaId: recipe.id } });
          return { receita: recipe, idempotente: false };
        }, { isolationLevel: "ReadCommitted" });
        return res.status(result.idempotente ? 200 : 201).json(result);
      } catch (error) { return sendError(res, error); }
    }
  };
}
const controller = createGenerationController();
export const generateRecipe = controller.generate;
export const saveGeneration = controller.save;
export const generationStatus = controller.status;
