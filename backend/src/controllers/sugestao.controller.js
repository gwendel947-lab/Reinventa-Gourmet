import { prisma } from "../config/prisma.js";

const MASS = { kg: 1000, g: 1 };
const VOLUME = { l: 1000, ml: 1 };

function normalizeUnit(unit) {
  return String(unit || "").trim().toLowerCase();
}

function comparableQuantity(quantity, from, to) {
  const source = normalizeUnit(from);
  const target = normalizeUnit(to);
  if (source === target) return quantity;
  if (MASS[source] && MASS[target]) return quantity * MASS[source] / MASS[target];
  if (VOLUME[source] && VOLUME[target]) return quantity * VOLUME[source] / VOLUME[target];
  return null;
}

function isCompatible(ingredient, diet, restrictions) {
  const activeRestrictions = restrictions.map((item) => item.toLowerCase());
  if ((diet !== "ONIVORO" || activeRestrictions.length) && ingredient.classificacaoStatus !== "VERIFICADO") return false;
  if (diet !== "ONIVORO" && !ingredient.dietasPermitidas) return false;
  if (diet !== "ONIVORO" && ingredient.dietasPermitidas) {
    const allowed = ingredient.dietasPermitidas.split(",").map((item) => item.trim());
    if (!allowed.includes(diet)) return false;
  }
  if (activeRestrictions.length && !ingredient.restricoes) return false;
  if (activeRestrictions.length && ingredient.restricoes) {
    const blocked = ingredient.restricoes.toLowerCase();
    if (activeRestrictions.some((restriction) => blocked.includes(restriction))) return false;
  }
  return true;
}

function toResult(recipe, inventory, selectedIds, servings) {
  const scale = servings / recipe.porcoes;
  const present = [];
  const missing = [];
  let required = 0;
  let availableRequired = 0;

  for (const item of recipe.ingredientes) {
    const requiredQuantity = item.quantidade * scale;
    const inventoryItem = inventory.get(item.ingredienteId);
    const selected = selectedIds.has(item.ingredienteId);
    const comparable = inventoryItem && selected
      ? comparableQuantity(inventoryItem.quantidade, inventoryItem.unidade, item.unidade)
      : null;
    const enough = comparable !== null && comparable >= requiredQuantity;
    const detail = {
      ingredienteId: item.ingredienteId,
      nome: item.ingrediente.nome,
      quantidade: requiredQuantity,
      unidade: item.unidade,
      opcional: item.opcional,
      quantidadeDisponivel: inventoryItem?.quantidade ?? null,
      unidadeDisponivel: inventoryItem?.unidade ?? null,
      situacao: enough ? "disponivel" : comparable === null && inventoryItem ? "unidade_incompativel" : "faltante"
    };
    if (!item.opcional) {
      required += 1;
      if (enough) availableRequired += 1;
    }
    (enough ? present : missing).push(detail);
  }

  return {
    id: recipe.id,
    titulo: recipe.titulo,
    modoPreparo: recipe.modoPreparo,
    tempoEstimado: recipe.tempoEstimado,
    porcoes: servings,
    publica: recipe.publica,
    geradaPorIA: recipe.geradaPorIA,
    origem: recipe.usuarioId === recipe._currentUserId ? "privada" : "comunidade",
    pontuacao: required ? Math.round((availableRequired / required) * 100) : 100,
    ingredientesPresentes: present,
    ingredientesFaltantes: missing,
    ingredientes: recipe.ingredientes
  };
}

export async function findSuggestions(req, res) {
  try {
    const userId = Number(req.user.id);
    const { ingredientIds, maxTime, servings = 1, allowMissing = false } = req.body;
    if (!Array.isArray(ingredientIds) || ingredientIds.some((id) => !Number.isInteger(Number(id)))) {
      return res.status(400).json({ message: "ingredientIds deve ser uma lista de IDs válidos." });
    }
    const requestedServings = Number(servings);
    if (!Number.isInteger(requestedServings) || requestedServings < 1 || requestedServings > 50) {
      return res.status(400).json({ message: "O número de porções deve estar entre 1 e 50." });
    }

    const user = await prisma.usuario.findUnique({
      where: { id: userId },
      include: { perfil: { include: { restricoes: true } }, inventario: true }
    });
    if (!user) return res.status(404).json({ message: "Usuário não encontrado." });

    const selectedIds = new Set(ingredientIds.map(Number));
    const inventory = new Map(user.inventario.map((item) => [item.ingredienteId, item]));
    const diet = user.perfil?.tipoDieta || "ONIVORO";
    const restrictions = user.perfil?.restricoes?.map((item) => item.tipo) || [];
    const where = {
      AND: [
        { OR: [{ publica: true }, { usuarioId: userId }] },
        ...(maxTime ? [{ tempoEstimado: { lte: Number(maxTime) } }] : [])
      ]
    };
    const recipes = await prisma.receita.findMany({
      where,
      include: { ingredientes: { include: { ingrediente: true } } },
      take: 100
    });

    const results = recipes
      .filter((recipe) => recipe.ingredientes.every((item) => isCompatible(item.ingrediente, diet, restrictions)))
      .map((recipe) => {
        const result = toResult(Object.assign(recipe, { _currentUserId: userId }), inventory, selectedIds, requestedServings);
        return { ...result, missingCount: result.ingredientesFaltantes.filter((item) => !item.opcional).length };
      })
      .filter((result) => allowMissing || result.missingCount === 0)
      .sort((a, b) => b.pontuacao - a.pontuacao || a.missingCount - b.missingCount || a.tempoEstimado - b.tempoEstimado)
      .slice(0, 10)
      .map(({ missingCount, ...result }) => result);

    return res.json({ receitas: results, preferencias: { tipoDieta: diet, restricoes } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno ao buscar sugestões." });
  }
}
