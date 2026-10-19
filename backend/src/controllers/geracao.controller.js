import crypto from "node:crypto";
import { GoogleGenAI, Type } from "@google/genai";
import { prisma } from "../config/prisma.js";

const activeUsers = new Set();

const outputSchema = {
  type: Type.OBJECT,
  properties: {
    titulo: { type: Type.STRING },
    ingredientes: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          nome: { type: Type.STRING },
          quantidade: { type: Type.NUMBER },
          unidade: { type: Type.STRING },
          opcional: { type: Type.BOOLEAN }
        },
        required: ["nome", "quantidade", "unidade"]
      }
    },
    passos: { type: Type.ARRAY, items: { type: Type.STRING } },
    tempoEstimado: { type: Type.INTEGER },
    porcoes: { type: Type.INTEGER }
  },
  required: ["titulo", "ingredientes", "passos", "tempoEstimado", "porcoes"]
};

function normalize(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
}

function cacheKey(body, inventory, profile, model) {
  return crypto.createHash("sha256").update(JSON.stringify({ body, inventory, profile, model })).digest("hex");
}

function errorCode(error) {
  const text = String(error?.message || error).toLowerCase();
  if (error?.status === 429 || text.includes("quota") || text.includes("429")) return "COTA_EXCEDIDA";
  if (error?.status === 403 || text.includes("safety") || text.includes("blocked")) return "CONTEUDO_BLOQUEADO";
  if (text.includes("timeout") || text.includes("deadline")) return "TIMEOUT";
  return "INDISPONIVEL";
}

function ingredientCompatible(ingredient, profile) {
  if ((profile.tipoDieta !== "ONIVORO" || profile.restricoes.length) && ingredient.classificacaoStatus !== "VERIFICADO") {
    return false;
  }
  if (profile.tipoDieta !== "ONIVORO") {
    const allowed = ingredient.dietasPermitidas?.split(",").map((item) => item.trim()) || [];
    if (!allowed.includes(profile.tipoDieta)) return false;
  }
  const blocked = ingredient.restricoes?.toLowerCase() || "";
  return !profile.restricoes.some((restriction) => blocked.includes(restriction.toLowerCase()));
}

async function loadContext(userId) {
  return prisma.usuario.findUnique({
    where: { id: userId },
    include: {
      perfil: { include: { restricoes: true } },
      inventario: { include: { ingrediente: true } }
    }
  });
}

export async function generateRecipe(req, res) {
  const userId = Number(req.user.id);
  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
  if (process.env.GEMINI_ENABLED !== "true" || !process.env.GEMINI_API_KEY) {
    return res.status(503).json({ code: "IA_INDISPONIVEL", message: "A geração com IA está indisponível. Use a busca no banco." });
  }
  if (activeUsers.has(userId)) return res.status(429).json({ code: "GERACAO_EM_ANDAMENTO", message: "Já existe uma geração em andamento." });

  const cooldown = Number(process.env.AI_COOLDOWN_SECONDS || 30);
  const dailyLimit = Number(process.env.AI_USER_DAILY_LIMIT || 5);
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const recent = await prisma.receitaGeracao.findMany({ where: { usuarioId: userId, criadaEm: { gte: since } }, orderBy: { criadaEm: "desc" }, take: dailyLimit + 1 });
  if (recent[0] && Date.now() - recent[0].criadaEm.getTime() < cooldown * 1000) {
    return res.status(429).json({ code: "COOLDOWN", message: `Aguarde ${cooldown} segundos entre gerações.` });
  }
  if (recent.length >= dailyLimit) return res.status(429).json({ code: "LIMITE_DIARIO", message: "Limite diário de gerações atingido." });

  const context = await loadContext(userId);
  if (!context) return res.status(404).json({ message: "Usuário não encontrado." });
  const selectedIds = Array.isArray(req.body.ingredientIds) ? req.body.ingredientIds.map(Number) : context.inventario.map((item) => item.ingredienteId);
  const selected = context.inventario.filter((item) => selectedIds.includes(item.ingredienteId));
  if (!selected.length) return res.status(400).json({ message: "Selecione ao menos um ingrediente." });

  const filters = {
    maxTime: req.body.maxTime ? Number(req.body.maxTime) : null,
    servings: Number(req.body.servings || 1),
    allowMissing: Boolean(req.body.allowMissing)
  };
  const profile = {
    tipoDieta: context.perfil?.tipoDieta || "ONIVORO",
    restricoes: context.perfil?.restricoes?.map((item) => item.tipo) || []
  };
  const key = cacheKey({ selectedIds, filters }, selected.map((item) => ({ ingredienteId: item.ingredienteId, quantidade: item.quantidade, unidade: item.unidade })), profile, model);
  const cached = await prisma.receitaGeracao.findFirst({
    where: { usuarioId: userId, chaveCache: key, status: { in: ["SUCESSO", "SALVO"] }, cacheExpiraEm: { gt: new Date() } },
    orderBy: { criadaEm: "desc" }
  });
  if (cached) return res.json({ geracao: { id: cached.id, receita: cached.payload, reutilizada: true } });

  activeUsers.add(userId);
  const startedAt = Date.now();
  let generation;
  try {
    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const ingredientText = selected.map((item) => `${item.ingrediente.nome}: ${item.quantidade} ${item.unidade}`).join("\n");
    const prompt = `Crie uma única receita em português usando preferencialmente apenas estes ingredientes:\n${ingredientText}\nPreferências: dieta ${profile.tipoDieta}; restrições ${profile.restricoes.join(", ") || "nenhuma"}; porções ${filters.servings}; tempo máximo ${filters.maxTime || "sem limite"} minutos; ingredientes faltantes ${filters.allowMissing ? "permitidos" : "proibidos"}. Não use sal, óleo ou itens básicos presumidos. Retorne somente o JSON solicitado.`;
    const response = await Promise.race([
      client.models.generateContent({ model, contents: prompt, config: { responseMimeType: "application/json", responseSchema: outputSchema } }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 30_000))
    ]);
    const consumo = response.usageMetadata
      ? {
          promptTokenCount: response.usageMetadata.promptTokenCount,
          candidatesTokenCount: response.usageMetadata.candidatesTokenCount,
          totalTokenCount: response.usageMetadata.totalTokenCount
        }
      : null;
    const parsed = JSON.parse(response.text);
    if (!parsed.titulo || !Array.isArray(parsed.ingredientes) || !Array.isArray(parsed.passos) || !parsed.ingredientes.length) throw new Error("resposta_invalida");
    if (!Number.isInteger(filters.servings) || filters.servings < 1 || filters.servings > 50) throw new Error("porcoes_invalidas");
    const catalog = await prisma.ingrediente.findMany();
    const catalogByName = new Map(catalog.map((item) => [normalize(item.nome), item]));
    const additions = parsed.ingredientes.filter((item) => !selectedIds.includes(catalogByName.get(normalize(item.nome))?.id));
    if (parsed.ingredientes.some((item) => !catalogByName.has(normalize(item.nome)))) throw new Error("ingrediente_de_catalogo_invalido");
    if (!filters.allowMissing && additions.length) throw new Error("ingrediente_adicional_restrito");
    if (additions.length > 3) throw new Error("ingredientes_adicionais_excedidos");
    const ingredients = parsed.ingredientes.map((item) => {
      const catalogItem = catalogByName.get(normalize(item.nome));
      if (!catalogItem || !ingredientCompatible(catalogItem, profile)) throw new Error("classificacao_incompleta");
      if (!Number.isFinite(Number(item.quantidade)) || Number(item.quantidade) <= 0 || typeof item.unidade !== "string" || !item.unidade.trim()) throw new Error("quantidade_invalida");
      return { ingredienteId: catalogItem.id, nome: catalogItem.nome, quantidade: Number(item.quantidade), unidade: item.unidade, opcional: Boolean(item.opcional) };
    });
    generation = { titulo: String(parsed.titulo).slice(0, 200), ingredientes: ingredients, passos: parsed.passos.map(String).slice(0, 30), tempoEstimado: Number(parsed.tempoEstimado), porcoes: filters.servings };
    if (!Number.isFinite(generation.tempoEstimado) || generation.tempoEstimado < 1 || (filters.maxTime && generation.tempoEstimado > filters.maxTime)) throw new Error("tempo_invalido");
    const record = await prisma.receitaGeracao.create({
      data: {
        usuarioId: userId,
        chaveCache: key,
        modelo: model,
        status: "SUCESSO",
        payload: generation,
        consumo,
        cacheExpiraEm: new Date(Date.now() + Number(process.env.AI_CACHE_TTL_SECONDS || 900) * 1000),
        rascunhoExpiraEm: new Date(Date.now() + Number(process.env.AI_DRAFT_TTL_SECONDS || 86400) * 1000),
        finalizadaEm: new Date(),
        duracaoMs: Date.now() - startedAt
      }
    });
    return res.json({ geracao: { id: record.id, receita: generation, reutilizada: false } });
  } catch (error) {
    const message = String(error?.message || error);
    const code = message === "resposta_invalida" || message.includes("ingrediente") || message.includes("classificacao") || message.includes("tempo") || message.includes("quantidade") || message.includes("porcoes") ? "RESPOSTA_INVALIDA" : errorCode(error);
    await prisma.receitaGeracao.create({ data: { usuarioId: userId, chaveCache: key, modelo: model, status: "ERRO", erroCodigo: code, finalizadaEm: new Date(), duracaoMs: Date.now() - startedAt } });
    return res.status(code === "TIMEOUT" ? 504 : 502).json({ code, message: "Não foi possível gerar uma receita válida. A busca no banco continua disponível." });
  } finally {
    activeUsers.delete(userId);
  }
}

export async function saveGeneration(req, res) {
  const generation = await prisma.receitaGeracao.findFirst({ where: { id: Number(req.params.id), usuarioId: Number(req.user.id), status: { in: ["SUCESSO", "SALVO"] }, rascunhoExpiraEm: { gt: new Date() } } });
  if (!generation || !generation.payload) return res.status(404).json({ message: "Rascunho não encontrado ou expirado." });
  if (generation.status === "SALVO" && generation.receitaId) {
    const savedRecipe = await prisma.receita.findUnique({ where: { id: generation.receitaId }, include: { ingredientes: { include: { ingrediente: true } } } });
    if (savedRecipe) return res.status(200).json({ receita: savedRecipe, idempotente: true });
  }
  const payload = generation.payload;
  const recipe = await prisma.receita.create({
    data: {
      usuarioId: Number(req.user.id), titulo: payload.titulo, modoPreparo: payload.passos.join("\n"), tempoEstimado: payload.tempoEstimado, porcoes: payload.porcoes, publica: false, geradaPorIA: true,
      ingredientes: { create: payload.ingredientes.map((item) => ({ ingredienteId: item.ingredienteId, quantidade: item.quantidade, unidade: item.unidade, opcional: item.opcional })) }
    },
    include: { ingredientes: { include: { ingrediente: true } } }
  });
  await prisma.receitaGeracao.update({ where: { id: generation.id }, data: { status: "SALVO", receitaId: recipe.id } });
  return res.status(201).json({ receita: recipe });
}
