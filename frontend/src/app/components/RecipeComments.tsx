import { useEffect, useState } from "react";
import { MessageCircle, Send, User } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";
import api from "../../services/api";

type CommentAuthor = { id: number; nome: string; avatar?: string | null };
type Comment = { id: number; texto: string; criadoEm: string; usuario: CommentAuthor; respostas: Array<{ id: number; texto: string; criadoEm: string; usuario: CommentAuthor }> };

export const RecipeComments = ({ recipeId, authorId }: { recipeId: number; authorId?: number }) => {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const loadComments = async () => {
    try {
      const { data } = await api.get(`/comunidade/receitas/${recipeId}/comentarios`);
      setComments(data.comentarios ?? []);
    } catch {
      toast.error("Não foi possível carregar os comentários.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { loadComments(); }, [recipeId]);

  const sendComment = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!user) { toast.error("Entre na sua conta para comentar."); return; }
    if (!text.trim()) return;
    setIsSending(true);
    try {
      await api.post(`/comunidade/receitas/${recipeId}/comentarios`, { texto: text, respostaDeId: replyTo });
      setText("");
      setReplyTo(null);
      await loadComments();
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? "Não foi possível salvar o comentário.");
    } finally { setIsSending(false); }
  };

  const authorAvatar = (author: CommentAuthor) => author.avatar ? <img src={author.avatar} alt="" className="h-full w-full object-cover" /> : <User size={16} />;

  return (
    <section className="border-t-2 border-dashed border-[#8C4B3A]/20 pt-6">
      <h3 className="mb-4 flex items-center gap-2 font-title text-2xl"><MessageCircle size={22} /> Comentários</h3>
      <form onSubmit={sendComment} className="mb-5 flex gap-2">
        <input value={text} onChange={(event) => setText(event.target.value)} placeholder={replyTo ? "Escreva sua resposta..." : "Escreva um comentário..."} className="min-w-0 flex-1 rounded-xl border-2 border-[#8C4B3A]/30 bg-white px-4 py-2 focus:border-[#E07A5F] focus:outline-none" />
        <button type="submit" disabled={isSending || !text.trim()} aria-label={replyTo ? "Enviar resposta" : "Enviar comentário"} className="rounded-xl border-2 border-[#8C4B3A] bg-[#E07A5F] px-3 text-white shadow-[2px_2px_0px_#8C4B3A] disabled:opacity-50"><Send size={18} /></button>
      </form>
      {replyTo && <button onClick={() => setReplyTo(null)} className="mb-3 text-sm font-bold text-[#E07A5F]">Cancelar resposta</button>}
      {isLoading ? <p className="opacity-60">Carregando comentários...</p> : comments.length === 0 ? <p className="opacity-60">Seja o primeiro a comentar.</p> : <div className="space-y-4">{comments.map((comment) => <div key={comment.id} className="rounded-xl bg-[#F2CC8F]/20 p-3"><div className="flex gap-2"><div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-[#8C4B3A] bg-[#E07A5F] text-white flex items-center justify-center">{authorAvatar(comment.usuario)}</div><div className="min-w-0"><strong>{comment.usuario.nome}</strong><p className="mt-1 break-words text-base">{comment.texto}</p><span className="text-xs opacity-60">{new Date(comment.criadoEm).toLocaleDateString("pt-BR")}</span></div></div>{authorId === user?.id && <button onClick={() => setReplyTo(comment.id)} className="ml-10 mt-2 text-sm font-bold text-[#E07A5F]">Responder</button>}{comment.respostas.length > 0 && <div className="ml-10 mt-3 space-y-2 border-l-2 border-[#E07A5F]/40 pl-3">{comment.respostas.map((reply) => <div key={reply.id} className="flex gap-2"><div className="h-7 w-7 shrink-0 overflow-hidden rounded-full border border-[#8C4B3A] bg-[#E07A5F] text-white flex items-center justify-center">{authorAvatar(reply.usuario)}</div><div><strong className="text-sm">{reply.usuario.nome}</strong><p className="text-sm">{reply.texto}</p></div></div>)}</div>}</div>)}</div>}
    </section>
  );
};
