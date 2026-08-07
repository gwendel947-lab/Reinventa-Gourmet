import { prisma } from "../config/prisma.js";

const InventarioController = {
  async create(req, res) {
    try {
      const { usuarioId, ingredienteId, quantidade, unidade } = req.body;

      if (!usuarioId || !ingredienteId || !quantidade || !unidade) {
        return res.status(400).json({
          message: "usuarioId, ingredienteId, quantidade e unidade são obrigatórios."
        });
      }

      const usuario = await prisma.usuario.findUnique({
        where: { id: Number(usuarioId) }
      });
      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      const ingrediente = await prisma.ingrediente.findUnique({
        where: { id: Number(ingredienteId) }
      });
      if (!ingrediente) {
        return res.status(404).json({ message: "Ingrediente não encontrado." });
      }

      const inventario = await prisma.inventario.upsert({
        where: {
          usuarioId_ingredienteId: {
            usuarioId: Number(usuarioId),
            ingredienteId: Number(ingredienteId)
          }
        },
        update: {
          quantidade: Number(quantidade),
          unidade
        },
        create: {
          usuarioId: Number(usuarioId),
          ingredienteId: Number(ingredienteId),
          quantidade: Number(quantidade),
          unidade
        }
      });

      return res.status(201).json({
        message: "Item de inventário cadastrado/atualizado com sucesso.",
        inventario
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro interno ao cadastrar item de inventário."
      });
    }
  },

  async listByUsuario(req, res) {
    try {
      const { usuarioId } = req.params;

      const inventario = await prisma.inventario.findMany({
        where: { usuarioId: Number(usuarioId) },
        include: { ingrediente: true }
      });

      return res.json({ inventario });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro interno ao listar inventário do usuário."
      });
    }
  }
};

export default InventarioController;
