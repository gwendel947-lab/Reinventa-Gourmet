import { prisma } from "../config/prisma.js";
import bcrypt from "bcrypt";

const UserController = {
  async register(req, res) {
    try {
      const { nome, email, senha } = req.body;

      if (!nome || !email || !senha) {
        return res.status(400).json({
          message: "Nome, email e senha são obrigatórios."
        });
      }

      const userExists = await prisma.user.findUnique({
        where: { email }
      });

      if (userExists) {
        return res.status(400).json({
          message: "E-mail já cadastrado."
        });
      }

      const senhaCriptografada = await bcrypt.hash(senha, 10);

      const user = await prisma.user.create({
        data: {
          nome,
          email,
          senha: senhaCriptografada
        }
      });

      return res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email
        }
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro interno do servidor."
      });
    }
  },

  async login(req, res) {
    return res.json({
      message: "Login será implementado na próxima etapa."
    });
  }
};

export default UserController;