import { prisma } from "../config/prisma.js";

function parsePositiveInteger(value) {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  const parsedValue = Number(value);
  return Number.isInteger(parsedValue) && parsedValue > 0 ? parsedValue : null;
}

const ComunidadeController = {
  async listComments(req, res) {
    try {
      const receitaId = parsePositiveInteger(req.params.receitaId);
      if (!receitaId) return res.status(400).json({ message: "receitaId inválido." });

      const comentarios = await prisma.comentario.findMany({
        where: { receitaId, respostaDeId: null },
        include: {
          usuario: { select: { id: true, nome: true, avatar: true } },
          respostas: {
            include: { usuario: { select: { id: true, nome: true, avatar: true } } },
            orderBy: { criadoEm: "asc" }
          }
        },
        orderBy: { criadoEm: "asc" }
      });
      return res.json({ comentarios });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno ao buscar comentários." });
    }
  },

  async createComment(req, res) {
    try {
      const receitaId = parsePositiveInteger(req.params.receitaId);
      const { texto, respostaDeId } = req.body;
      const usuarioId = parsePositiveInteger(req.user?.id);
      if (!receitaId || !usuarioId || !String(texto ?? "").trim()) {
        return res.status(400).json({ message: "Receita e texto do comentário são obrigatórios." });
      }

      const receita = await prisma.receita.findUnique({ where: { id: receitaId } });
      if (!receita || (!receita.publica && receita.usuarioId !== usuarioId)) {
        return res.status(404).json({ message: "Receita não encontrada." });
      }

      let parentId = null;
      if (respostaDeId !== undefined && respostaDeId !== null) {
        parentId = parsePositiveInteger(respostaDeId);
        const parent = parentId ? await prisma.comentario.findUnique({ where: { id: parentId } }) : null;
        if (!parent || parent.receitaId !== receitaId || receita.usuarioId !== usuarioId) {
          return res.status(403).json({ message: "Apenas o criador pode responder comentários desta receita." });
        }
      }

      const comentario = await prisma.comentario.create({
        data: { receitaId, usuarioId, respostaDeId: parentId, texto: String(texto).trim() },
        include: { usuario: { select: { id: true, nome: true, avatar: true } } }
      });
      return res.status(201).json({ comentario });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro interno ao salvar comentário." });
    }
  },

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

      const where = {
        AND: [
          {
            OR: [
              { receita: null },
              ...(req.user?.id
                ? [{ receita: { publica: true } }, { receita: { usuarioId: Number(req.user.id) } }]
                : [{ receita: { publica: true } }])
            ]
          }
        ]
      };

      if (q?.trim()) {
        where.AND.push({ OR: [
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
        ] });
      }

      if (usuarioId && req.user?.id && parsedUsuarioId === Number(req.user.id)) {
        where.AND.push({ usuarioId: parsedUsuarioId });
      }

      if (receitaId) {
        where.AND.push({ receitaId: parsedReceitaId });
      }

      const postagens = await prisma.postagem.findMany({
        where,
        include: {
          usuario: {
            select: {
              id: true,
              nome: true,
              email: true,
              avatar: true
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
                  nome: true,
                  avatar: true
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
      const { receitaId, comentario, imagemPrato } = req.body;
      const parsedUsuarioId = parsePositiveInteger(req.user?.id);
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

        if (receita.usuarioId !== parsedUsuarioId) {
          return res.status(403).json({ message: "Você só pode publicar suas próprias receitas." });
        }

        if (!receita.publica) {
          return res.status(400).json({ message: "A receita privada não pode ser publicada no feed." });
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
