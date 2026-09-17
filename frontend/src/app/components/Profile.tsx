import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SavedRecipe, useAuth } from "../contexts/AuthContext";
import { User, LogOut, Settings, Camera, Heart, BookOpen, Clock, Flame, ArrowRight, X, Save, Search } from "lucide-react";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router";
import clsx from "clsx";
import api from "../../services/api";
import { RecipeDetails, RecipeDetailsModal } from "./RecipeDetailsModal";
import { RecipeEditModal } from "./RecipeEditModal";
import { readImageAsDataUrl } from "../../services/image";
import { AvatarCropModal } from "./AvatarCropModal";

export const Profile = () => {
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"minhas" | "favoritas">(
    location.pathname === "/favorites" ? "favoritas" : "minhas"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [myRecipes, setMyRecipes] = useState<SavedRecipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeDetails | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<RecipeDetails | null>(null);
  const [isRecipeSaving, setIsRecipeSaving] = useState(false);
  const [isAvatarSaving, setIsAvatarSaving] = useState(false);
  const [avatarToCrop, setAvatarToCrop] = useState<string | null>(null);
  const favoriteRecipes = user?.savedRecipes ?? [];
  const filteredFavoriteRecipes = favoriteRecipes.filter((recipe) =>
    `${recipe.title} ${recipe.author ?? ""}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mapRecipe = (recipe: any, author = user?.name): SavedRecipe => ({
    id: recipe.id,
    title: recipe.titulo,
    time: String(recipe.tempoEstimado),
    difficulty: "",
    servings: String(recipe.porcoes),
    preparation: recipe.modoPreparo,
    ingredients: recipe.ingredientes,
    author: recipe.usuario?.nome ?? author,
    authorId: recipe.usuario?.id,
    image: recipe.imagem ?? undefined,
  });

  useEffect(() => {
    if (!user) return;
    api.get("/users/me").then(({ data }) => {
      updateUser({ avatar: data.user.avatar, name: data.user.nome, email: data.user.email });
    }).catch(() => undefined);
  }, [user?.id]);

  useEffect(() => {
    if (!user) return;
    const loadMyRecipes = async () => {
      try {
        const { data } = await api.get(`/receitas?usuarioId=${user.id}`);
        setMyRecipes((data.receitas ?? []).map((recipe: any) => mapRecipe(recipe, user.name)));
      } catch {
        toast.error("Não foi possível carregar suas receitas.");
      }
    };
    loadMyRecipes();
  }, [user?.id]);

  const selectTab = (tab: "minhas" | "favoritas") => {
    setActiveTab(tab);
    if (tab === "favoritas") navigate("/favorites");
    else navigate("/profile");
  };

  const removeFavorite = (id: number) => {
    updateUser({ savedRecipes: favoriteRecipes.filter((recipe) => recipe.id !== id) });
    toast.success("Receita removida das favoritas.");
  };

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;
    try {
      setAvatarToCrop(await readImageAsDataUrl(file, 1200));
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? error.message ?? "Não foi possível salvar a foto.");
    } finally {
      event.target.value = "";
    }
  };

  const saveAvatar = async (avatar: string) => {
    setIsAvatarSaving(true);
    try {
      const { data } = await api.put("/users/me", { avatar });
      updateUser({ avatar: data.user.avatar });
      setAvatarToCrop(null);
      toast.success("Foto de perfil salva com sucesso!");
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? "Não foi possível salvar a foto.");
    } finally {
      setIsAvatarSaving(false);
    }
  };

  const toRecipeDetails = (recipe: SavedRecipe): RecipeDetails => ({
    id: recipe.id,
    title: recipe.title,
    preparation: recipe.preparation ?? "Modo de preparo não informado.",
    time: recipe.time,
    servings: recipe.servings ?? "-",
    author: recipe.author,
    authorId: recipe.authorId,
    ingredients: recipe.ingredients ?? [],
    tags: recipe.tags,
    aiTip: recipe.aiTip,
    image: recipe.image,
  });

  const saveRecipeChanges = async (recipe: RecipeDetails, ingredientNames: string[]) => {
    setIsRecipeSaving(true);
    try {
      const { data: ingredientData } = await api.get("/ingredientes");
      const existingIngredients = ingredientData.ingredientes ?? [];
      const ingredients = await Promise.all(ingredientNames.map(async (name) => {
        const existing = existingIngredients.find((item: { id: number; nome: string }) => item.nome.toLowerCase() === name.toLowerCase());
        if (existing) return existing.id;
        const { data } = await api.post("/ingredientes", { nome: name, categoria: "outros" });
        return data.ingrediente.id;
      }));
      const { data } = await api.put(`/receitas/${recipe.id}`, {
        titulo: recipe.title,
        modoPreparo: recipe.preparation,
        tempoEstimado: Number(recipe.time),
        porcoes: Number(recipe.servings),
        ingredientes: ingredients.map((ingredienteId) => ({ ingredienteId, quantidade: 1, unidade: "" })),
      });
      const updatedRecipe = mapRecipe(data.receita);
      setMyRecipes((previous) => previous.map((item) => item.id === updatedRecipe.id ? updatedRecipe : item));
      setEditingRecipe(null);
      toast.success("Receita atualizada com sucesso!");
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? "Não foi possível atualizar a receita.");
    } finally {
      setIsRecipeSaving(false);
    }
  };

  const deleteRecipe = async (recipe: RecipeDetails) => {
    if (!window.confirm(`Excluir a receita "${recipe.title}"?`)) return;
    try {
      await api.delete(`/receitas/${recipe.id}`);
      setMyRecipes((previous) => previous.filter((item) => item.id !== recipe.id));
      setSelectedRecipe(null);
      toast.success("Receita excluída com sucesso.");
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? "Não foi possível excluir a receita.");
    }
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    diet: "",
    allergies: [] as string[]
  });

  const openEditModal = () => {
    if (user) {
      setEditData({
        name: user.name,
        diet: user.diet || "Come de tudo",
        allergies: user.allergies || []
      });
      setIsEditModalOpen(true);
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editData.name.trim()) {
      toast.error("O nome não pode estar vazio!");
      return;
    }
    updateUser({
      name: editData.name,
      diet: editData.diet,
      allergies: editData.allergies
    });
    toast.success("Perfil atualizado com sucesso!");
    setIsEditModalOpen(false);
  };

  const toggleEditAllergy = (allergy: string) => {
    setEditData((prev) => ({
      ...prev,
      allergies: prev.allergies.includes(allergy)
        ? prev.allergies.filter((a) => a !== allergy)
        : [...prev.allergies, allergy]
    }));
  };

  if (!user) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6">
        <User size={64} className="text-[#8C4B3A]/40 mb-4" />
        <h2 className="font-title text-4xl text-[#8C4B3A] mb-4">OPS!</h2>
        <p className="text-xl text-[#8C4B3A]/80 mb-8">Você precisa estar logado para acessar seu perfil.</p>
        <button 
          onClick={() => navigate("/tool")}
          className="px-8 py-3 bg-[#E07A5F] text-[#FEFAF0] rounded-xl font-title text-xl shadow-[4px_4px_0px_#8C4B3A] hover:bg-[#8C4B3A] transition-all"
        >
          IR PARA RECEITAS
        </button>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    toast.success("Você saiu da conta.");
    navigate("/");
  };

  return (
    <div className="w-full min-h-[90vh] bg-[#FEFAF0] text-[#8C4B3A] p-6 pt-12 pb-24">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER DO PERFIL */}
        <div className="bg-white border-4 border-[#8C4B3A] rounded-3xl p-8 md:p-12 mb-12 shadow-[8px_8px_0px_#E07A5F] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2CC8F] rounded-full blur-[80px] opacity-40"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 w-full">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-[#8C4B3A] overflow-hidden bg-[#F2CC8F] flex items-center justify-center shadow-[4px_4px_0px_#8C4B3A]">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-title text-5xl text-[#8C4B3A]">{user.name.charAt(0).toUpperCase()}</span>
                )}
              </div>
              <label className="absolute bottom-0 right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#8C4B3A] bg-[#E07A5F] text-white shadow-sm transition-colors hover:bg-[#8C4B3A]" title="Alterar foto de perfil">
                <Camera size={18} />
                <input type="file" accept="image/*" onChange={handleAvatarChange} disabled={isAvatarSaving} className="sr-only" />
              </label>
            </div>

            <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
              <h1 className="font-title text-4xl md:text-5xl mb-2">{user.name}</h1>
              <p className="text-xl opacity-70 mb-4">{user.email}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-1 bg-[#F2CC8F]/30 border-2 border-[#8C4B3A]/30 rounded-full font-bold text-sm">
                  {user.diet}
                </span>
                {user.allergies && user.allergies.map(allergy => (
                  <span key={allergy} className="px-4 py-1 bg-[#E07A5F]/10 border-2 border-[#E07A5F]/30 text-[#E07A5F] rounded-full font-bold text-sm">
                    {allergy}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-row md:flex-col gap-4">
              <button onClick={openEditModal} className="flex items-center gap-2 px-6 py-3 border-2 border-[#8C4B3A] text-[#8C4B3A] rounded-xl font-bold hover:bg-[#F2CC8F] transition-colors shadow-[2px_2px_0px_#8C4B3A]">
                <Settings size={20} />
                <span className="hidden sm:inline">Editar Perfil</span>
              </button>
              <button onClick={handleLogout} className="flex items-center gap-2 px-6 py-3 bg-[#E07A5F] text-white rounded-xl font-bold border-2 border-[#8C4B3A] hover:bg-[#d1684c] transition-colors shadow-[2px_2px_0px_#8C4B3A]">
                <LogOut size={20} />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-4 mb-8 border-b-2 border-[#8C4B3A]/20 pb-4 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => selectTab("minhas")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-title text-xl transition-all whitespace-nowrap ${
              activeTab === "minhas" 
                ? "bg-[#8C4B3A] text-white shadow-[4px_4px_0px_#F2CC8F] -translate-y-1" 
                : "bg-[#FEFAF0] text-[#8C4B3A] hover:bg-[#8C4B3A]/10 border-2 border-transparent"
            }`}
          >
            <BookOpen size={24} />
            MINHAS RECEITAS
          </button>
          <button 
            onClick={() => selectTab("favoritas")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-title text-xl transition-all whitespace-nowrap ${
              activeTab === "favoritas" 
                ? "bg-[#8C4B3A] text-white shadow-[4px_4px_0px_#E07A5F] -translate-y-1" 
                : "bg-[#FEFAF0] text-[#8C4B3A] hover:bg-[#8C4B3A]/10 border-2 border-transparent"
            }`}
          >
            <Heart size={24} />
            RECEITAS FAVORITAS
          </button>
        </div>

        {/* CONTEÚDO DAS TABS */}
        <AnimatePresence mode="wait">
          {activeTab === "minhas" && (
            <motion.div 
              key="minhas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {myRecipes.map(recipe => (
                <button key={recipe.id} onClick={() => setSelectedRecipe(toRecipeDetails(recipe))} className="bg-white border-4 border-[#8C4B3A] rounded-3xl p-5 text-left shadow-[6px_6px_0px_#F2CC8F] hover:shadow-[8px_8px_0px_#E07A5F] hover:-translate-y-1 transition-all group">
                  {recipe.image && <img src={recipe.image} alt={recipe.title} className="mb-4 h-40 w-full rounded-2xl object-cover" />}
                  <h3 className="font-title text-2xl mb-3 leading-tight">{recipe.title}</h3>
                  <div className="flex items-center gap-4 text-sm font-bold opacity-70 mb-6">
                    <span className="flex items-center gap-1"><Clock size={16} /> {recipe.time}{/\bmin\b/i.test(recipe.time) ? "" : " min"}</span>
                    <span className="flex items-center gap-1"><Flame size={16} /> {recipe.servings ?? "-"} porções</span>
                  </div>
                  <span className="flex items-center gap-1 font-bold text-[#E07A5F]">Ver receita <ArrowRight size={16} /></span>
                </button>
              ))}
              
              {/* Add New Recipe Card */}
              <div 
                onClick={() => navigate("/tool")}
                className="bg-[#F2CC8F]/20 border-4 border-dashed border-[#8C4B3A]/40 rounded-3xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#F2CC8F]/40 hover:border-[#8C4B3A] transition-all min-h-[320px]"
              >
                <div className="w-16 h-16 bg-[#E07A5F] rounded-full flex items-center justify-center text-white mb-4 shadow-[4px_4px_0px_#8C4B3A]">
                  <Flame size={32} />
                </div>
                <h3 className="font-title text-2xl mb-2">NOVA RECEITA</h3>
                <p className="opacity-70 font-medium">Bateu a fome? Crie uma nova receita com a IA agora mesmo.</p>
              </div>
            </motion.div>
          )}

          {activeTab === "favoritas" && (
            <motion.div
              key="favoritas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="relative max-w-xl">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C4B3A]/50" />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Buscar por receita ou autor..."
                  aria-label="Buscar receitas favoritas"
                  className="w-full bg-white border-2 border-[#8C4B3A]/30 rounded-xl pl-11 pr-4 py-3 text-lg focus:border-[#E07A5F] focus:outline-none"
                />
              </div>

              {filteredFavoriteRecipes.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredFavoriteRecipes.map(recipe => (
                    <div key={recipe.id} className="bg-white border-4 border-[#8C4B3A] rounded-2xl p-5 shadow-[6px_6px_0px_#E07A5F] flex items-center justify-between gap-4 group hover:-translate-y-1 transition-all">
                      <button onClick={() => setSelectedRecipe(toRecipeDetails(recipe))} className="text-left">
                        {recipe.image && <img src={recipe.image} alt={recipe.title} className="mb-3 h-24 w-32 rounded-xl object-cover" />}
                        <h3 className="font-title text-xl mb-2">{recipe.title}</h3>
                        <div className="flex items-center gap-4 text-sm font-bold opacity-70">
                          <span className="flex items-center gap-1"><User size={16} /> {recipe.author ?? "Você"}</span>
                          <span className="flex items-center gap-1"><Clock size={16} /> {recipe.time}</span>
                        </div>
                        <span className="mt-2 inline-block font-bold text-[#E07A5F]">Abrir receita</span>
                      </button>
                      <button
                        onClick={() => removeFavorite(recipe.id)}
                        aria-label={`Remover ${recipe.title} das favoritas`}
                        title="Remover das favoritas"
                        className="w-12 h-12 shrink-0 rounded-xl bg-[#F2CC8F] flex items-center justify-center border-2 border-[#8C4B3A] text-[#8C4B3A] group-hover:bg-[#E07A5F] group-hover:text-white transition-colors shadow-[2px_2px_0px_#8C4B3A]"
                      >
                        <Heart size={24} fill="currentColor" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-[#F2CC8F]/20 border-4 border-dashed border-[#8C4B3A]/40 rounded-2xl p-10 text-center">
                  <Heart size={44} className="mx-auto mb-4 text-[#E07A5F]" />
                  <h3 className="font-title text-2xl mb-2">
                    {favoriteRecipes.length === 0 ? "Você ainda não salvou receitas" : "Nenhuma receita encontrada"}
                  </h3>
                  <p className="opacity-70 mb-6">
                    {favoriteRecipes.length === 0 ? "Gere uma receita e salve suas preferidas para encontrá-las aqui." : "Tente buscar por outro nome ou autor."}
                  </p>
                  {favoriteRecipes.length === 0 && (
                    <button onClick={() => navigate("/tool")} className="px-6 py-3 bg-[#E07A5F] text-white rounded-xl font-bold border-2 border-[#8C4B3A] shadow-[3px_3px_0px_#8C4B3A]">
                      GERAR RECEITA
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <RecipeDetailsModal
          recipe={selectedRecipe}
          isFavorite={selectedRecipe ? favoriteRecipes.some((recipe) => recipe.id === selectedRecipe.id) : false}
          onToggleFavorite={() => {
            if (!selectedRecipe) return;
            const isSaved = favoriteRecipes.some((recipe) => recipe.id === selectedRecipe.id);
            updateUser({ savedRecipes: isSaved ? favoriteRecipes.filter((recipe) => recipe.id !== selectedRecipe.id) : [...favoriteRecipes, selectedRecipe] });
            toast.success(isSaved ? "Receita removida das favoritas." : "Receita adicionada às favoritas!");
          }}
          onEdit={selectedRecipe && myRecipes.some((recipe) => recipe.id === selectedRecipe.id) ? () => { setEditingRecipe(selectedRecipe); setSelectedRecipe(null); } : undefined}
          onDelete={selectedRecipe && myRecipes.some((recipe) => recipe.id === selectedRecipe.id) ? () => deleteRecipe(selectedRecipe) : undefined}
          onClose={() => setSelectedRecipe(null)}
        />

        <RecipeEditModal recipe={editingRecipe} isSaving={isRecipeSaving} onSave={saveRecipeChanges} onClose={() => setEditingRecipe(null)} />
        <AvatarCropModal image={avatarToCrop} onSave={saveAvatar} onClose={() => setAvatarToCrop(null)} />

      </div>

      {/* EDIT PROFILE MODAL */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditModalOpen(false)}
              className="absolute inset-0 bg-[#8C4B3A]/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#FEFAF0] border-4 border-[#8C4B3A] rounded-3xl p-8 w-full max-w-lg relative z-10 shadow-[12px_12px_0px_#E07A5F] max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="absolute top-6 right-6 text-[#8C4B3A]/50 hover:text-[#E07A5F] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#F2CC8F] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#8C4B3A] shadow-[4px_4px_0px_#8C4B3A]">
                  <Settings size={32} className="text-[#8C4B3A]" />
                </div>
                <h2 className="font-title text-3xl text-[#8C4B3A] mb-2">EDITAR PERFIL</h2>
                <p className="text-lg opacity-80">
                  Ajuste suas informações e preferências.
                </p>
              </div>

              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2">Nome</label>
                    <div className="relative">
                      <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C4B3A]/50" />
                      <input 
                        type="text" 
                        value={editData.name}
                        onChange={(e) => setEditData({...editData, name: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[#8C4B3A]/30 rounded-xl focus:border-[#E07A5F] focus:outline-none transition-colors text-lg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2">Perfil Alimentar</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Come de tudo", "Vegetariano", "Vegano"].map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setEditData({...editData, diet: opt})}
                          className={clsx(
                            "py-2 px-1 text-sm font-medium rounded-xl border-2 transition-all",
                            editData.diet === opt 
                              ? "bg-[#F2CC8F] border-[#8C4B3A] shadow-[2px_2px_0px_#8C4B3A] text-[#8C4B3A]" 
                              : "bg-white border-[#8C4B3A]/20 text-[#8C4B3A]/60 hover:border-[#8C4B3A]/40"
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2">Restrições / Alergias</label>
                    <div className="flex gap-3">
                      {["Sem Glúten", "Sem Lactose"].map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleEditAllergy(opt)}
                          className={clsx(
                            "flex-1 py-2 text-sm font-medium rounded-xl border-2 transition-all",
                            editData.allergies.includes(opt)
                              ? "bg-[#E07A5F] border-[#8C4B3A] shadow-[2px_2px_0px_#8C4B3A] text-white" 
                              : "bg-white border-[#8C4B3A]/20 text-[#8C4B3A]/60 hover:border-[#8C4B3A]/40"
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E07A5F] text-[#FEFAF0] py-4 rounded-xl font-title text-xl shadow-[4px_4px_0px_#8C4B3A] hover:bg-[#8C4B3A] hover:shadow-[2px_2px_0px_#F2CC8F] transition-all mt-4 flex items-center justify-center gap-2"
                >
                  <Save size={24} />
                  SALVAR ALTERAÇÕES
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};