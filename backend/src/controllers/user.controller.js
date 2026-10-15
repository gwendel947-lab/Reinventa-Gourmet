import { prisma } from "../config/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const dietMap = {
  ONIVORO: "Come de tudo",
  VEGETARIANO: "Vegetariano",
  VEGANO: "Vegano",
  PESCATARIANO: "Pescetariano",
  CETOGENICO: "Cetogênico",
  OUTRO: "Outro"
};

const userSelect = {
  id: true,
  nome: true,
  email: true,
  avatar: true,
  perfil: { include: { restricoes: { select: { tipo: true } } } }
};

function serializeUser(user) {
  return {
    id: user.id,
    nome: user.nome,
    email: user.email,
    avatar: user.avatar,
    tipoDieta: dietMap[user.perfil?.tipoDieta] || "Come de tudo",
    restricoes: user.perfil?.restricoes?.map((item) => item.tipo) || []
  };
}

const UserController = {
  async me(req, res) {
    const user = await prisma.usuario.findUnique({
      where: { id: Number(req.user.id) },
      select: userSelect
    });
    if (!user) return res.status(404).json({ message: "Usuário não encontrado." });
    return res.json({ user: serializeUser(user) });
  },

  async update(req, res) {
    try {
      const { avatar, nome, tipoDieta, restricoes } = req.body;
      if (avatar !== undefined && avatar !== null && typeof avatar !== "string") {
        return res.status(400).json({ message: "A foto de perfil é inválida." });
      }
      if (avatar && avatar.length > 4_000_000) {
        return res.status(400).json({ message: "A foto de perfil é muito grande." });
      }

      const dietMapReverse = Object.fromEntries(Object.entries(dietMap).map(([key, value]) => [value, key]));
      const dietValue = tipoDieta ? (dietMapReverse[tipoDieta] || tipoDieta) : undefined;
      const user = await prisma.$transaction(async (transaction) => {
        const updated = await transaction.usuario.update({
          where: { id: Number(req.user.id) },
          data: {
          ...(nome?.trim() ? { nome: nome.trim() } : {}),
          ...(avatar !== undefined ? { avatar: avatar || null } : {})
          },
          select: userSelect
        });
        if (dietValue || Array.isArray(restricoes)) {
          const perfil = await transaction.perfilAlimentar.upsert({
            where: { usuarioId: Number(req.user.id) },
            update: dietValue ? { tipoDieta: dietValue } : {},
            create: { usuarioId: Number(req.user.id), tipoDieta: dietValue || "ONIVORO" }
          });
          if (Array.isArray(restricoes)) {
            await transaction.restricaoAlimentar.deleteMany({ where: { perfilId: perfil.id } });
            await transaction.restricaoAlimentar.createMany({
              data: restricoes.filter((item) => typeof item === "string" && item.trim()).map((tipo) => ({ perfilId: perfil.id, tipo: tipo.trim() }))
            });
          }
        }
        return transaction.usuario.findUnique({ where: { id: updated.id }, select: userSelect });
      });

      return res.json({ message: "Perfil atualizado com sucesso.", user: serializeUser(user) });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno ao atualizar perfil." });
    }
  },

  async register(req, res) {
    try {
      const { nome, email, senha, tipoDieta = "Come de tudo", restricoes = [] } = req.body;

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

      const dietMap = {
        "Come de tudo": "ONIVORO",
        Vegetariano: "VEGETARIANO",
        Vegano: "VEGANO"
      };
      const tipoDietaBanco = dietMap[tipoDieta] || "ONIVORO";
      const restricoesValidas = Array.isArray(restricoes)
        ? restricoes.filter((restricao) => typeof restricao === "string" && restricao.trim())
        : [];

      const user = await prisma.$transaction(async (transaction) => {
        const createdUser = await transaction.usuario.create({
          data: {
            nome,
            email,
            senha: senhaCriptografada,
            perfil: {
              create: {
                tipoDieta: tipoDietaBanco,
                restricoes: {
                  create: restricoesValidas.map((tipo) => ({ tipo }))
                }
              }
            }
          }
        });

        return createdUser;
      });

      return res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email,
          avatar: user.avatar
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

      const user = await prisma.usuario.findUnique({ where: { email }, select: { ...userSelect, senha: true } });

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
        user: serializeUser(user)
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