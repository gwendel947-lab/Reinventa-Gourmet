export class RecipeError extends Error {
  constructor(code, message, status = 400, retryAfterSeconds) {
    super(message);
    Object.assign(this, { code, status, retryAfterSeconds });
  }
}

export const normalize = (value) => String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
const diets = { "come de tudo": "ONIVORO", vegetariano: "VEGETARIANO", vegano: "VEGANO", pescetariano: "PESCATARIANO", cetogenico: "CETOGENICO", outro: "OUTRO" };
const knownRestrictions = new Set(["sem gluten", "sem lactose"]);
const units = new Set(["g", "kg", "ml", "l", "unidade", "xicara", "colher"]);

export function preferences(input = {}, saved = {}) {
  const rawDiet = input.tipoDieta ?? saved.tipoDieta ?? "ONIVORO";
  const tipoDieta = diets[normalize(rawDiet)] || rawDiet;
  const rawRestrictions = input.restricoes ?? saved.restricoes?.map((item) => item.tipo) ?? [];
  if (!Object.values(diets).includes(tipoDieta) || !Array.isArray(rawRestrictions) || rawRestrictions.some((item) => typeof item !== "string")) {
    throw new RecipeError("PREFERENCIAS_INVALIDAS", "Informe uma dieta e restrições válidas.");
  }
  const restricoes = [...new Set(rawRestrictions.map(normalize).filter(Boolean))].sort();
  if (restricoes.some((item) => !knownRestrictions.has(item))) {
    throw new RecipeError("RESTRICAO_DESCONHECIDA", "Podemos conferir apenas Sem Glúten e Sem Lactose. Revise as restrições informadas.");
  }
  return { tipoDieta, restricoes };
}

export function comparableQuantity(quantity, from, to) {
  const source = normalize(from);
  const target = normalize(to);
  if (source === target) return quantity;
  for (const group of [{ kg: 1000, g: 1 }, { l: 1000, ml: 1 }]) {
    if (group[source] && group[target]) return quantity * group[source] / group[target];
  }
  return null;
}

export function isCompatible(ingredient, diet, restrictions) {
  if ((diet !== "ONIVORO" || restrictions.length) && ingredient.classificacaoStatus !== "VERIFICADO") return false;
  if (diet !== "ONIVORO" && !ingredient.dietasPermitidas?.split(",").map((item) => item.trim()).includes(diet)) return false;
  // null means unknown; an explicitly reviewed empty string means no listed restriction.
  if (restrictions.length && ingredient.restricoes == null) return false;
  const blocked = (ingredient.restricoes || "").split(",").map(normalize);
  return !restrictions.some((item) => blocked.includes(normalize(item)));
}

export function requestContext(body = {}, inventory, savedProfile) {
  if (!Array.isArray(body.ingredientIds) || !body.ingredientIds.length || body.ingredientIds.length > 100 ||
      body.ingredientIds.some((id) => !Number.isInteger(id) || id < 1)) {
    throw new RecipeError("INGREDIENTES_INVALIDOS", "Selecione ingredientes válidos do seu inventário.");
  }
  const ids = [...new Set(body.ingredientIds)].sort((a, b) => a - b);
  const selected = ids.map((id) => inventory.find((item) => item.ingredienteId === id));
  if (selected.some((item) => !item || !Number.isFinite(item.quantidade) || item.quantidade <= 0 || !units.has(normalize(item.unidade)))) {
    throw new RecipeError("ESTOQUE_INVALIDO", "Confira os ingredientes, quantidades positivas e unidades do inventário.");
  }
  const servings = body.servings ?? 1;
  const maxTime = body.maxTime === undefined || body.maxTime === null || body.maxTime === "" ? null : Number(body.maxTime);
  if (!Number.isInteger(servings) || servings < 1 || servings > 50 || (maxTime !== null && (!Number.isInteger(maxTime) || maxTime < 1)) ||
      (body.allowMissing !== undefined && typeof body.allowMissing !== "boolean")) {
    throw new RecipeError("FILTROS_INVALIDOS", "Informe de 1 a 50 porções e um tempo máximo positivo.");
  }
  if (body.preferencias !== undefined && (!body.preferencias || typeof body.preferencias !== "object" || Array.isArray(body.preferencias))) {
    throw new RecipeError("PREFERENCIAS_INVALIDAS", "Preferências inválidas.");
  }
  const profile = preferences(body.preferencias, savedProfile ?? {});
  if (selected.some((item) => !isCompatible(item.ingrediente, profile.tipoDieta, profile.restricoes))) {
    throw new RecipeError("CLASSIFICACAO_INCOMPLETA", "Há ingredientes incompatíveis ou sem classificação revisada para suas preferências.");
  }
  return { selected, profile, filters: { servings, maxTime, allowMissing: body.allowMissing ?? false } };
}

export function validateRecipe(parsed, selected, allowed, filters) {
  const invalid = () => { throw new RecipeError("RESPOSTA_INVALIDA", "A IA não retornou uma receita compatível com seu estoque e filtros. Tente a busca no banco.", 502); };
  if (!parsed || typeof parsed.titulo !== "string" || !parsed.titulo.trim() || parsed.titulo.length > 200 ||
      !Array.isArray(parsed.passos) || !parsed.passos.length || parsed.passos.length > 30 ||
      parsed.passos.some((step) => typeof step !== "string" || !step.trim() || step.length > 2000) ||
      !Number.isInteger(parsed.tempoEstimado) || parsed.tempoEstimado < 1 ||
      (filters.maxTime && parsed.tempoEstimado > filters.maxTime) || parsed.porcoes !== filters.servings ||
      !Array.isArray(parsed.ingredientes) || !parsed.ingredientes.length || parsed.ingredientes.length > 100) invalid();
  const seen = new Set();
  let additions = 0;
  const ingredientes = parsed.ingredientes.map((item) => {
    const catalogItem = allowed.find((candidate) => candidate.id === item.ingredienteId);
    if (!catalogItem || seen.has(item.ingredienteId) || typeof item.quantidade !== "number" || !Number.isFinite(item.quantidade) ||
        item.quantidade <= 0 || !units.has(normalize(item.unidade)) ||
        (item.opcional !== undefined && typeof item.opcional !== "boolean")) invalid();
    seen.add(item.ingredienteId);
    const stock = selected.find((candidate) => candidate.ingredienteId === item.ingredienteId);
    if (!stock) additions++;
    const available = stock ? comparableQuantity(stock.quantidade, stock.unidade, item.unidade) : 0;
    const situacao = available === null ? "unidade_incompativel" : available >= item.quantidade ? "disponivel" : "faltante";
    if (!filters.allowMissing && situacao !== "disponivel") invalid();
    return { ingredienteId: catalogItem.id, nome: catalogItem.nome, quantidade: item.quantidade,
      unidade: item.unidade.trim(), opcional: item.opcional ?? false, situacao,
      quantidadeDisponivel: stock?.quantidade ?? 0, unidadeDisponivel: stock?.unidade ?? item.unidade };
  });
  if (additions > 3 || !ingredientes.some((item) => selected.some((stock) => stock.ingredienteId === item.ingredienteId))) invalid();
  return { titulo: parsed.titulo.trim(), ingredientes, passos: parsed.passos.map((step) => step.trim()),
    tempoEstimado: parsed.tempoEstimado, porcoes: filters.servings };
}
