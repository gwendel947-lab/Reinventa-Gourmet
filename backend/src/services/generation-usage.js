import crypto from "node:crypto";
import { RecipeError } from "./recipe-rules.js";

export function aiConfig(env = process.env) {
  const positive = (name, fallback) => {
    const value = Number(env[name] || fallback);
    return Number.isSafeInteger(value) && value > 0 ? value : null;
  };
  const config = { apiKey: env.GEMINI_API_KEY, model: env.GEMINI_MODEL,
    timeout: positive("GEMINI_TIMEOUT_MS", 30000), daily: positive("AI_USER_DAILY_LIMIT", 5),
    cooldown: positive("AI_COOLDOWN_SECONDS", 30), cache: positive("AI_CACHE_TTL_SECONDS", 900),
    draft: positive("AI_DRAFT_TTL_SECONDS", 86400), minute: positive("AI_GLOBAL_MINUTE_LIMIT"),
    globalDaily: positive("AI_GLOBAL_DAILY_LIMIT") };
  return { ...config, enabled: env.GEMINI_ENABLED === "true" && Object.values(config).every(Boolean) };
}

export function generationKey(context, allowed, model) {
  return crypto.createHash("sha256").update(JSON.stringify({ version: 2, context, allowed, model })).digest("hex");
}

export async function limits(db, userId, config, now = new Date()) {
  const since = new Date(now.getTime() - 86400000);
  const [active, recent, minuteCount, dailyCount] = await Promise.all([
    db.receitaGeracao.findFirst({ where: { usuarioId: userId, status: "EM_ANDAMENTO", reservaExpiraEm: { gt: now } } }),
    db.receitaGeracao.findMany({ where: { usuarioId: userId, criadaEm: { gt: since } }, orderBy: { criadaEm: "desc" } }),
    db.receitaGeracao.count({ where: { criadaEm: { gt: new Date(now.getTime() - 60000) } } }),
    db.receitaGeracao.count({ where: { criadaEm: { gt: since } } })
  ]);
  if (active) throw new RecipeError("GERACAO_EM_ANDAMENTO", "Já existe uma geração em andamento.", 429, Math.max(1, Math.ceil((active.reservaExpiraEm - now) / 1000)));
  if (recent.length >= config.daily) throw new RecipeError("LIMITE_DIARIO", "Seu limite de gerações em 24 horas foi atingido.", 429, Math.max(1, Math.ceil((recent[config.daily - 1].criadaEm.getTime() + 86400000 - now.getTime()) / 1000)));
  if (recent[0] && now - recent[0].criadaEm < config.cooldown * 1000) throw new RecipeError("COOLDOWN", "Aguarde antes de gerar outra receita.", 429, Math.ceil(config.cooldown - (now - recent[0].criadaEm) / 1000));
  if (minuteCount >= config.minute || dailyCount >= config.globalDaily) throw new RecipeError("LIMITE_GLOBAL", "O limite de uso da aplicação foi atingido. Use a busca no banco.", 429, minuteCount >= config.minute ? 60 : 86400);
}

export async function reserve(db, userId, key, config) {
  return db.$transaction(async (tx) => {
    // One persistent row serializes admission across all server instances.
    const lock = await tx.$queryRaw`SELECT id FROM ia_controle WHERE id = 1 FOR UPDATE`;
    if (!lock.length) throw new RecipeError("IA_CONFIGURACAO", "O controle de uso da IA precisa ser configurado.", 503);
    const now = new Date();
    await limits(tx, userId, config, now);
    return tx.receitaGeracao.create({ data: { usuarioId: userId, chaveCache: key, modelo: config.model,
      status: "EM_ANDAMENTO", reservaExpiraEm: new Date(now.getTime() + config.timeout + 30000) } });
  }, { isolationLevel: "ReadCommitted" });
}
