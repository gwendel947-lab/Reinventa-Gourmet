import { prisma } from "../config/prisma.js";

function parsePositiveInteger(value) {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  const parsedValue = Number(value);
  return Number.isInteger(parsedValue) && parsedValue > 0 ? parsedValue : null;
}

const ComunidadeController = {
  async listFeed(req, res) {
    try {
      const { q, usuarioId, receitaId } = req.query;
      const parsedUsuarioId = parsePositiveInteger(usuarioId);
      const parsedReceitaId = parsePositiveInteger(receitaId);

      if (usuarioId !== undefined && parsedUsuarioId === null) {
        return res.status(400).json({ message: "usuarioId deve ser um inteiro positivo." });
      }

      if (receitaId !== undefined && parsedReceitaId === null) {
        return res.status(400).json({ message: "receitaId deve ser um inteiro positivo." });
      }

      const where = {};

      if (q?.trim()) {
        where.OR = [
          {
            comentario: {
              contains: q.trim(),
              mode: "insensitive"
            }
          },
          {
            usuario: {
              nome: {
                contains: q.trim(),
                mode: "insensitive"
              }
            }
          }
        ];
      }

      if (usuarioId) {
        where.usuarioId = parsedUsuarioId;
      }

      if (receitaId) {
        where.receitaId = parsedReceitaId;
      }

      const postagens = await prisma.postagem.findMany({
        where,
        include: {
          usuario: {
            select: {
              id: true,
              nome: true,
              email: true
            }
          },
          receita: {
            include: {
              ingredientes: {
                include: {
                  ingrediente: true
                }
              },
              usuario: {
                select: {
                  id: true,
                  nome: true
                }
              }
            }
          }
        },
        orderBy: {
          criadaEm: "desc"
        }
      });

      return res.json({
        postagens,
        total: postagens.length
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro interno ao buscar postagens do feed."
      });
    }
  },

  async createPost(req, res) {
    try {
      const { usuarioId, receitaId, comentario, imagemPrato } = req.body;
      const parsedUsuarioId = parsePositiveInteger(usuarioId);
      const parsedReceitaId = parsePositiveInteger(receitaId);
      const comentarioNormalizado = comentario ? String(comentario).trim() : null;
      const imagemNormalizada = imagemPrato ? String(imagemPrato).trim() : null;

      if (parsedUsuarioId === null) {
        return res.status(400).json({
          message: "usuarioId deve ser um inteiro positivo."
        });
      }

      if (receitaId !== undefined && parsedReceitaId === null) {
        return res.status(400).json({ message: "receitaId deve ser um inteiro positivo." });
      }

      if (!comentarioNormalizado && !imagemNormalizada && parsedReceitaId === null) {
        return res.status(400).json({
          message: "Informe um comentário, uma imagem ou uma receita para criar a postagem."
        });
      }

      const usuario = await prisma.usuario.findUnique({
        where: { id: parsedUsuarioId }
      });

      if (!usuario) {
        return res.status(404).json({
          message: "Usuário não encontrado."
        });
      }

      if (parsedReceitaId !== null) {
        const receita = await prisma.receita.findUnique({
          where: { id: parsedReceitaId }
        });

        if (!receita) {
          return res.status(404).json({
            message: "Receita não encontrada."
          });
        }
      }

      const postagem = await prisma.postagem.create({
        data: {
          usuarioId: parsedUsuarioId,
          receitaId: parsedReceitaId,
          comentario: comentarioNormalizado,
          imagemPrato: imagemNormalizada
        },
        include: {
          usuario: {
            select: {
              id: true,
              nome: true,
              email: true
            }
          },
          receita: {
            include: {
              ingredientes: {
                include: {
                  ingrediente: true
                }
              },
              usuario: {
                select: {
                  id: true,
                  nome: true
                }
              }
            }
          }
        }
      });

      return res.status(201).json({
        message: "Postagem criada com sucesso.",
        postagem
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro interno ao criar postagem no feed."
      });
    }
  }
};

export default ComunidadeController;
