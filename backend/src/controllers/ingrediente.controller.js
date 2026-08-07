import { prisma } from "../config/prisma.js";

const IngredienteController = {
  async create(req, res) {
    try {
      const { nome, categoria } = req.body;

      if (!nome || !categoria) {
        return res.status(400).json({
          message: "Nome e categoria do ingrediente são obrigatórios."
        });
      }

      const ingredienteExistente = await prisma.ingrediente.findUnique({
        where: { nome }
      });

      if (ingredienteExistente) {
        return res.status(409).json({
          message: "Ingrediente já cadastrado."
        });
      }

      const ingrediente = await prisma.ingrediente.create({
        data: { nome, categoria }
      });

      return res.status(201).json({
        message: "Ingrediente cadastrado com sucesso.",
        ingrediente
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro interno ao cadastrar ingrediente."
      });
    }
  },

  async list(req, res) {
    try {
      const { categoria } = req.query;
      const where = categoria ? { categoria } : {};

      const ingredientes = await prisma.ingrediente.findMany({
        where,
        orderBy: { nome: "asc" }
      });

      return res.json({ ingredientes });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro interno ao listar ingredientes."
      });
    }
  }
};

export default IngredienteController;
