import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Clock, Flame, Heart, Lock, MessageCircle, Search, Share2, User, Users, Wand2 } from "lucide-react";
import { toast } from "sonner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useAuth } from "../contexts/AuthContext";
import api from "../../services/api";

type FeedPost = {
  id: number;
  comentario: string | null;
  criadaEm: string;
  usuario: { id: number; nome: string };
  receita: {
    id: number;
    titulo: string;
    tempoEstimado: number;
    porcoes: number;
    publica: boolean;
  } | null;
};

const emptyForm = {
  title: "",
  ingredients: "",
  preparation: "",
  time: "30",
  servings: "2",
  comment: "",
  visibility: "public" as "public" | "private",
};

export const CommunityFeed = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<FeedPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadFeed = async () => {
    try {
      const { data } = await api.get("/comunidade/feed");
      setPosts(data.postagens ?? []);
    } catch {
      toast.error("Não foi possível carregar as receitas da comunidade.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadFeed();
  }, []);

  const updateForm = (field: keyof typeof emptyForm, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const createRecipe = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!user) {
      toast.error("Entre na sua conta para criar uma receita.");
      return;
    }

    const ingredientNames = form.ingredients.split("\n").map((item) => item.trim()).filter(Boolean);
    if (!form.title.trim() || !form.preparation.trim() || ingredientNames.length === 0) {
      toast.error("Preencha o título, os ingredientes e o modo de preparo.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data: ingredientData } = await api.get("/ingredientes");
      const existingIngredients = ingredientData.ingredientes ?? [];
      const ingredients = await Promise.all(ingredientNames.map(async (name) => {
        const existing = existingIngredients.find(
          (ingredient: { id: number; nome: string }) => ingredient.nome.toLowerCase() === name.toLowerCase()
        );
        if (existing) return existing.id;
        const { data } = await api.post("/ingredientes", { nome: name, categoria: "outros" });
        return data.ingrediente.id;
      }));

      const { data: recipeData } = await api.post("/receitas", {
        titulo: form.title.trim(),
        modoPreparo: form.preparation.trim(),
        tempoEstimado: Number(form.time),
        porcoes: Number(form.servings),
        publica: form.visibility === "public",
        ingredientes: ingredients.map((ingredienteId) => ({ ingredienteId, quantidade: 1, unidade: "unidade" })),
      });

      if (form.visibility === "public") {
        await api.post("/comunidade/feed", { receitaId: recipeData.receita.id, comentario: form.comment.trim() || null });
        toast.success("Receita publicada na comunidade!");
        await loadFeed();
      } else {
        toast.success("Receita privada salva na sua conta!");
      }
      setForm(emptyForm);
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? "Não foi possível salvar a receita.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const visiblePosts = posts.filter((post) => {
    const content = `${post.receita?.titulo ?? ""} ${post.comentario ?? ""} ${post.usuario.nome}`;
    return content.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="w-full min-h-screen bg-[#FEFAF0] text-[#8C4B3A] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <div className="inline-block bg-[#F2CC8F] px-6 py-2 rounded-full border-2 border-[#8C4B3A] shadow-[4px_4px_0px_#8C4B3A] mb-6"><span className="font-title text-xl tracking-wider">MURAL DE RECEITAS</span></div>
          <h1 className="font-title text-6xl md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#8C4B3A] to-[#E07A5F]">COMUNIDADE GOURMET</h1>
          <p className="text-2xl opacity-80 max-w-2xl mx-auto font-medium">Crie receitas para guardar só para você ou compartilhe suas invenções com a comunidade.</p>
        </header>

        <motion.form onSubmit={createRecipe} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto bg-white border-4 border-[#8C4B3A] rounded-3xl p-6 md:p-8 shadow-[8px_8px_0px_#E07A5F] mb-16">
          <div className="flex items-center gap-3 mb-6"><div className="bg-[#F2CC8F] p-3 rounded-xl border-2 border-[#8C4B3A]"><Wand2 size={26} /></div><div><h2 className="font-title text-3xl">CRIAR RECEITA</h2><p className="opacity-70">Sua receita será salva no banco de dados.</p></div></div>
          <div className="grid md:grid-cols-2 gap-5">
            <label className="md:col-span-2 font-bold">Título<input value={form.title} onChange={(event) => updateForm("title", event.target.value)} placeholder="Ex: Massa cremosa de domingo" className="mt-2 w-full bg-[#FEFAF0] border-2 border-[#8C4B3A]/30 rounded-xl px-4 py-3 font-normal focus:border-[#E07A5F] focus:outline-none" /></label>
            <label className="font-bold">Ingredientes<textarea value={form.ingredients} onChange={(event) => updateForm("ingredients", event.target.value)} placeholder="Um ingrediente por linha" className="mt-2 w-full h-32 bg-[#FEFAF0] border-2 border-[#8C4B3A]/30 rounded-xl px-4 py-3 font-normal resize-none focus:border-[#E07A5F] focus:outline-none" /></label>
            <label className="font-bold">Modo de preparo<textarea value={form.preparation} onChange={(event) => updateForm("preparation", event.target.value)} placeholder="Descreva o passo a passo" className="mt-2 w-full h-32 bg-[#FEFAF0] border-2 border-[#8C4B3A]/30 rounded-xl px-4 py-3 font-normal resize-none focus:border-[#E07A5F] focus:outline-none" /></label>
            <label className="font-bold">Tempo (minutos)<input type="number" min="1" value={form.time} onChange={(event) => updateForm("time", event.target.value)} className="mt-2 w-full bg-[#FEFAF0] border-2 border-[#8C4B3A]/30 rounded-xl px-4 py-3 font-normal focus:border-[#E07A5F] focus:outline-none" /></label>
            <label className="font-bold">Porções<input type="number" min="1" value={form.servings} onChange={(event) => updateForm("servings", event.target.value)} className="mt-2 w-full bg-[#FEFAF0] border-2 border-[#8C4B3A]/30 rounded-xl px-4 py-3 font-normal focus:border-[#E07A5F] focus:outline-none" /></label>
            <label className="md:col-span-2 font-bold">Comentário para a comunidade (opcional)<textarea value={form.comment} onChange={(event) => updateForm("comment", event.target.value)} placeholder="Conte como essa receita nasceu..." className="mt-2 w-full h-24 bg-[#FEFAF0] border-2 border-[#8C4B3A]/30 rounded-xl px-4 py-3 font-normal resize-none focus:border-[#E07A5F] focus:outline-none" /></label>
          </div>
          <div className="mt-6 flex flex-col md:flex-row gap-4 md:items-end"><div className="flex-1"><span className="block font-bold mb-2">Visibilidade</span><div className="flex gap-2"><button type="button" onClick={() => updateForm("visibility", "public")} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-bold ${form.visibility === "public" ? "bg-[#8C4B3A] text-white border-[#8C4B3A]" : "bg-white border-[#8C4B3A]/30"}`}><Users size={18} /> Pública</button><button type="button" onClick={() => updateForm("visibility", "private")} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-bold ${form.visibility === "private" ? "bg-[#8C4B3A] text-white border-[#8C4B3A]" : "bg-white border-[#8C4B3A]/30"}`}><Lock size={18} /> Privada</button></div></div><button type="submit" disabled={isSubmitting} className="md:w-64 py-3 bg-[#E07A5F] text-white rounded-xl font-title text-xl border-2 border-[#8C4B3A] shadow-[4px_4px_0px_#8C4B3A] disabled:opacity-60">{isSubmitting ? "SALVANDO..." : form.visibility === "public" ? "PUBLICAR RECEITA" : "SALVAR PRIVADA"}</button></div>
        </motion.form>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"><div><h2 className="font-title text-4xl">RECEITAS PUBLICADAS</h2><p className="opacity-70">Invenções compartilhadas pela comunidade.</p></div><div className="relative w-full md:w-80"><Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50" /><input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Buscar receitas..." className="w-full bg-white border-2 border-[#8C4B3A]/30 rounded-xl pl-11 pr-4 py-3 focus:border-[#E07A5F] focus:outline-none" /></div></div>
        {isLoading ? <p className="text-center py-12 opacity-70">Carregando receitas...</p> : visiblePosts.length === 0 ? <div className="text-center py-16 border-4 border-dashed border-[#8C4B3A]/20 rounded-3xl opacity-70">Nenhuma receita pública encontrada.</div> : <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}><Masonry gutter="24px">{visiblePosts.map((post) => <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white border-4 border-[#8C4B3A] rounded-[2rem] p-5 shadow-[6px_6px_0px_#F2CC8F]"><div className="flex gap-3 items-center mb-5"><div className="w-12 h-12 rounded-full bg-[#E07A5F] flex items-center justify-center text-white font-title text-xl border-2 border-[#8C4B3A]"><User size={22} /></div><div><h3 className="font-bold text-lg">{post.usuario.nome}</h3><span className="text-sm opacity-70">{new Date(post.criadaEm).toLocaleDateString("pt-BR")}</span></div></div>{post.receita && <div className="mb-4"><h2 className="font-title text-2xl">{post.receita.titulo}</h2><div className="flex gap-4 text-sm font-bold opacity-70 mt-2"><span className="flex items-center gap-1"><Clock size={16} /> {post.receita.tempoEstimado} min</span><span className="flex items-center gap-1"><Flame size={16} /> {post.receita.porcoes} porções</span></div></div>}{post.comentario && <p className="text-lg leading-relaxed mb-5">{post.comentario}</p>}<div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-[#8C4B3A]/20 text-[#8C4B3A]/70"><button className="flex items-center gap-2"><Heart size={20} /> 0</button><button className="flex items-center gap-2"><MessageCircle size={20} /> 0</button><button><Share2 size={20} /></button></div></motion.article>)}</Masonry></ResponsiveMasonry>}
      </div>
    </div>
  );
};
