import { prisma } from "../config/prisma.js";

const ReceitaController = {
  async create(req, res) {
    try {
      const { titulo, modoPreparo, tempoEstimado, porcoes, publica, imagem, ingredientes } = req.body;

      if (!req.user?.id || !titulo || !modoPreparo || !tempoEstimado || !porcoes || !Array.isArray(ingredientes)) {
        return res.status(400).json({
          message: "Dados obrigatórios: titulo, modoPreparo, tempoEstimado, porcoes e ingredientes."
        });
      }

      if (ingredientes.length === 0) {
        return res.status(400).json({
          message: "A receita deve conter pelo menos um ingrediente."
        });
      }

      if (imagem && (typeof imagem !== "string" || imagem.length > 6_000_000)) {
        return res.status(400).json({ message: "A imagem da receita é inválida ou muito grande." });
      }

      const usuario = await prisma.usuario.findUnique({ where: { id: Number(req.user.id) } });
      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      const receita = await prisma.receita.create({
        data: {
          usuarioId: Number(req.user.id),
          titulo,
          modoPreparo,
          tempoEstimado: Number(tempoEstimado),
          porcoes: Number(porcoes),
          publica: publica ?? true,
          imagem: imagem || null,
          ingredientes: {
            create: ingredientes.map((item) => ({
              ingredienteId: Number(item.ingredienteId),
              quantidade: Number(item.quantidade),
              unidade: item.unidade,
              opcional: item.opcional ?? false
            }))
          }
        },
        include: {
          ingredientes: {
            include: { ingrediente: true }
          }
        }
      });

      return res.status(201).json({
        message: "Receita cadastrada com sucesso.",
        receita
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro interno ao cadastrar receita."
      });
    }
  },

  async list(req, res) {
    try {
      const { usuarioId, ingredienteId, titulo } = req.query;
      const where = req.user?.id
        ? { OR: [{ publica: true }, { usuarioId: Number(req.user.id) }] }
        : { publica: true };

      if (usuarioId) {
        where.usuarioId = Number(usuarioId);
      }
      if (titulo) {
        where.AND = [{ titulo: {
          contains: titulo,
          mode: "insensitive"
        } }];
      }
      if (ingredienteId) {
        where.ingredientes = {
          some: {
            ingredienteId: Number(ingredienteId)
          }
        };
      }

      const receitas = await prisma.receita.findMany({
        where,
        include: {
          ingredientes: {
            include: { ingrediente: true }
          },
          usuario: {
            select: { id: true, nome: true, email: true }
          }
        },
        orderBy: { criadaEm: "desc" }
      });

      return res.json({ receitas });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro interno ao listar receitas."
      });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;

      const receita = await prisma.receita.findUnique({
        where: { id: Number(id) },
        include: {
          ingredientes: {
            include: { ingrediente: true }
          },
          usuario: {
            select: { id: true, nome: true, email: true }
          }
        }
      });

      if (!receita || (!receita.publica && receita.usuarioId !== Number(req.user?.id))) {
        return res.status(404).json({ message: "Receita não encontrada." });
      }

      return res.json({ receita });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro interno ao buscar receita."
      });
    }
  },

  async update(req, res) {
    try {
      const receitaId = Number(req.params.id);
      const { titulo, modoPreparo, tempoEstimado, porcoes, publica, imagem, ingredientes } = req.body;
      const receitaAtual = await prisma.receita.findUnique({ where: { id: receitaId } });

      if (!receitaAtual || receitaAtual.usuarioId !== Number(req.user.id)) {
        return res.status(404).json({ message: "Receita não encontrada." });
      }
      if (!titulo || !modoPreparo || !tempoEstimado || !porcoes || !Array.isArray(ingredientes) || ingredientes.length === 0) {
        return res.status(400).json({ message: "Dados obrigatórios da receita inválidos." });
      }
      if (imagem !== undefined && imagem !== null && (typeof imagem !== "string" || imagem.length > 6_000_000)) {
        return res.status(400).json({ message: "A imagem da receita é inválida ou muito grande." });
      }

      const receita = await prisma.$transaction(async (transaction) => {
        await transaction.receitaIngrediente.deleteMany({ where: { receitaId } });
        return transaction.receita.update({
          where: { id: receitaId },
          data: {
            titulo,
            modoPreparo,
            tempoEstimado: Number(tempoEstimado),
            porcoes: Number(porcoes),
            publica: publica ?? receitaAtual.publica,
            ...(imagem !== undefined ? { imagem: imagem || null } : {}),
            ingredientes: {
              create: ingredientes.map((item) => ({
                ingredienteId: Number(item.ingredienteId),
                quantidade: Number(item.quantidade ?? 1),
                unidade: item.unidade ?? "",
                opcional: item.opcional ?? false
              }))
            }
          },
          include: { ingredientes: { include: { ingrediente: true } } }
        });
      });

      return res.json({ message: "Receita atualizada com sucesso.", receita });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno ao atualizar receita." });
    }
  },

  async remove(req, res) {
    try {
      const receitaId = Number(req.params.id);
      const receita = await prisma.receita.findUnique({ where: { id: receitaId } });

      if (!receita || receita.usuarioId !== Number(req.user.id)) {
        return res.status(404).json({ message: "Receita não encontrada." });
      }

      await prisma.$transaction(async (transaction) => {
        await transaction.postagem.deleteMany({ where: { receitaId } });
        await transaction.receita.delete({ where: { id: receitaId } });
      });

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno ao excluir receita." });
    }
  }
};

export default ReceitaController;
