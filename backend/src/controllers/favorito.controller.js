import { prisma } from "../config/prisma.js";

export async function listFavorites(req, res) {
  const favoritos = await prisma.favorito.findMany({
    where: { usuarioId: Number(req.user.id) },
    include: { receita: { include: { ingredientes: { include: { ingrediente: true } } } } },
    orderBy: { criadoEm: "desc" }
  });
  return res.json({ favoritos });
}

export async function addFavorite(req, res) {
  const receitaId = Number(req.params.receitaId);
  const receita = await prisma.receita.findUnique({ where: { id: receitaId } });
  if (!receita || (!receita.publica && receita.usuarioId !== Number(req.user.id))) return res.status(404).json({ message: "Receita não encontrada." });
  const favorito = await prisma.favorito.upsert({
    where: { usuarioId_receitaId: { usuarioId: Number(req.user.id), receitaId } },
    update: {},
    create: { usuarioId: Number(req.user.id), receitaId }
  });
  return res.status(201).json({ favorito });
}

export async function removeFavorite(req, res) {
  await prisma.favorito.deleteMany({ where: { usuarioId: Number(req.user.id), receitaId: Number(req.params.receitaId) } });
  return res.status(204).send();
}
