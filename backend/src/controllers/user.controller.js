import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserController = {
  async register(req, res) {
    try {
      const { nome, email, senha } = req.body;

      if (!nome || !email || !senha) {
        return res.status(400).json({
          message: "Nome, email e senha são obrigatórios."
        });
      }

      const userExists = await prisma.usuario.findUnique({
        where: { email }
      });

      if (userExists) {
        return res.status(400).json({
          message: "E-mail já cadastrado."
        });
      }

      const senhaCriptografada = await bcrypt.hash(senha, 10);

      const user = await prisma.usuario.create({
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
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({
          message: "E-mail e senha são obrigatórios."
        });
      }

      const user = await prisma.usuario.findUnique({
        where: { email }
      });

      if (!user) {
        return res.status(401).json({
          message: "Credenciais inválidas."
        });
      }

      const senhaValida = await bcrypt.compare(senha, user.senha);

      if (!senhaValida) {
        return res.status(401).json({
          message: "Credenciais inválidas."
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        process.env.JWT_SECRET || "reinventa-gourmet-secret",
        { expiresIn: "8h" }
      );

      return res.status(200).json({
        message: "Login realizado com sucesso.",
        token,
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
  }
};

export default UserController;