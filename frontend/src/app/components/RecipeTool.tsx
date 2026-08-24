import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, X, Wand2, ChefHat, Clock, Flame, Leaf, Settings2, Info, User as UserIcon, Camera, Mail, Lock, Save } from "lucide-react";
import { toast } from "sonner";
import clsx from "clsx";

import { useAuth } from "../contexts/AuthContext";
import api from "../../services/api";

const mockRecipes = [
  {
    title: "Omelete Rústico de Abobrinha",
    time: "15 min",
    difficulty: "Fácil",
    tags: ["Vegetariano", "Sem Glúten"],
    ingredients: ["2 ovos", "1/2 abobrinha ralada", "Sal e pimenta", "Fio de azeite"],
    steps: [
      "Bata os ovos em uma tigela com um garfo até misturar bem a clara e a gema.",
      "Adicione a abobrinha ralada (esprema um pouco a água dela antes) e tempere.",
      "Aqueça uma frigideira com azeite em fogo médio.",
      "Despeje a mistura e deixe cozinhar até as bordas firmarem. Vire e doure o outro lado."
    ],
    aiTip: "Se tiver queijo ralado esquecido no fundo da geladeira, coloque por cima nos últimos minutos!"
  },
  {
    title: "Massa Cremosa 'De Ontem'",
    time: "20 min",
    difficulty: "Médio",
    tags: ["Conforto"],
    ingredients: ["Resto de macarrão", "1 xícara de leite", "Queijo ralado", "1 dente de alho"],
    steps: [
      "Refogue o alho picado em um pouco de manteiga ou óleo.",
      "Adicione o leite e deixe aquecer, sem ferver.",
      "Coloque o queijo ralado e mexa até derreter e formar um creme.",
      "Adicione o macarrão cozido e envolva no molho."
    ],
    aiTip: "Adicionar uma pitada de noz-moscada vai dar um toque super profissional a esse prato."
  },
];

export const RecipeTool = () => {
  const { user: currentUser, login, updateUser } = useAuth();
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inventoryIds, setInventoryIds] = useState<Record<string, number>>({});
  const [isLoadingInventory, setIsLoadingInventory] = useState(false);
  const [isSavingIngredient, setIsSavingIngredient] = useState(false);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<typeof mockRecipes[0] | null>(null);

  // Auth & Profile Mock State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [diet, setDiet] = useState<string>("Come de tudo");
  const [allergies, setAllergies] = useState<string[]>([]);

  useEffect(() => {
    if (!currentUser?.id) {
      setIngredients([]);
      setInventoryIds({});
      return;
    }

    const loadInventory = async () => {
      setIsLoadingInventory(true);
      try {
        const { data } = await api.get(`/inventario/usuario/${currentUser.id}`);
        const items = data.inventario ?? [];
        setIngredients(items.map((item: { ingrediente: { nome: string } }) => item.ingrediente.nome));
        setInventoryIds(Object.fromEntries(
          items.map((item: { ingrediente: { nome: string }; ingredienteId: number }) => [item.ingrediente.nome, item.ingredienteId])
        ));
      } catch {
        toast.error("Não foi possível carregar seu inventário.");
      } finally {
        setIsLoadingInventory(false);
      }
    };

    loadInventory();
  }, [currentUser?.id]);

  const toggleAllergy = (allergy: string) => {
    setAllergies((prev) =>
      prev.includes(allergy) ? prev.filter((a) => a !== allergy) : [...prev, allergy]
    );
  };

  const handleGenerateClick = () => {
    if (ingredients.length === 0) {
      toast.error("Adicione ao menos um ingrediente ao seu inventário!");
      return;
    }
    if (!currentUser?.id) {
      setIsAuthModalOpen(true);
    } else {
      generateRecipe();
    }
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === "signup") {
      if (!signupData.name || !signupData.email || !signupData.password) {
        toast.error("Preencha todos os campos!");
        return;
      }
      try {
        await api.post("/users/register", {
          nome: signupData.name,
          email: signupData.email,
          senha: signupData.password
        });
        const { data } = await api.post("/users/login", {
          email: signupData.email,
          senha: signupData.password
        });
        localStorage.setItem("reinventa-token", data.token);
        login({ id: data.user.id, name: data.user.nome, email: data.user.email, diet, allergies });
        toast.success(`Bem-vindo(a), ${signupData.name}!`);
      } catch (error: any) {
        toast.error(error.response?.data?.message ?? "Não foi possível criar sua conta.");
        return;
      }
    } else {
      if (!loginData.email || !loginData.password) {
        toast.error("Preencha todos os campos!");
        return;
      }
      try {
        const { data } = await api.post("/users/login", {
          email: loginData.email,
          senha: loginData.password
        });
        localStorage.setItem("reinventa-token", data.token);
        login({ id: data.user.id, name: data.user.nome, email: data.user.email, diet: "Come de tudo", allergies: [] });
        toast.success("Login efetuado com sucesso!");
      } catch (error: any) {
        toast.error(error.response?.data?.message ?? "Não foi possível entrar.");
        return;
      }
    }
    setIsAuthModalOpen(false);
    generateRecipe();
  };

  const addIngredient = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = input.trim();
    if (!name || !currentUser?.id || ingredients.some((item) => item.toLowerCase() === name.toLowerCase())) return;

    setIsSavingIngredient(true);
    try {
      const { data: ingredientData } = await api.get("/ingredientes");
      const existing = (ingredientData.ingredientes ?? []).find(
        (item: { id: number; nome: string }) => item.nome.toLowerCase() === name.toLowerCase()
      );
      let ingredient = existing;
      if (!ingredient) {
        const { data } = await api.post("/ingredientes", { nome: name, categoria: "outros" });
        ingredient = data.ingrediente;
      }

      await api.post("/inventario", {
        usuarioId: currentUser.id,
        ingredienteId: ingredient.id,
        quantidade: 1,
        unidade: "unidade"
      });
      setIngredients((previous) => [...previous, ingredient.nome]);
      setInventoryIds((previous) => ({ ...previous, [ingredient.nome]: ingredient.id }));
      setInput("");
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? "Não foi possível adicionar o ingrediente.");
    } finally {
      setIsSavingIngredient(false);
    }
  };

  const removeIngredient = async (ing: string) => {
    if (!currentUser?.id || !inventoryIds[ing]) return;
    try {
      await api.delete(`/inventario/usuario/${currentUser.id}/ingrediente/${inventoryIds[ing]}`);
      setIngredients((previous) => previous.filter((item) => item !== ing));
      setInventoryIds((previous) => {
        const next = { ...previous };
        delete next[ing];
        return next;
      });
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? "Não foi possível remover o ingrediente.");
    }
  };

  const generateRecipe = () => {
    if (ingredients.length === 0) {
      toast.error("Adicione ao menos um ingrediente ao seu inventário!");
      return;
    }

    setIsGenerating(true);
    setGeneratedRecipe(null);
    
    // Simulate AI loading
    setTimeout(() => {
      setIsGenerating(false);
      // Pick a mock recipe based on ingredients (simple logic for demo)
      const hasEgg = ingredients.some(i => i.toLowerCase().includes("ovo"));
      setGeneratedRecipe(hasEgg ? mockRecipes[0] : mockRecipes[1]);
      toast.success("Receita criada com sucesso!");
    }, 2500);
  };

  const handleSaveRecipe = () => {
    if (!generatedRecipe) return;
    if (!currentUser?.id) {
      toast.error("Faça login para salvar sua receita.");
      setIsAuthModalOpen(true);
      return;
    }

    const savedRecipes = currentUser.savedRecipes ?? [];
    if (savedRecipes.some((recipe) => recipe.title === generatedRecipe.title)) {
      toast("Essa receita já está salva no seu perfil.");
      return;
    }

    updateUser({
      savedRecipes: [
        ...savedRecipes,
        {
          id: Date.now(),
          title: generatedRecipe.title,
          time: generatedRecipe.time,
          difficulty: generatedRecipe.difficulty,
          author: currentUser.name,
        },
      ],
    });

    toast.success("Receita salva no perfil!");
  };

  return (
    <div className="w-full min-h-[90vh] bg-[#FEFAF0] text-[#8C4B3A] p-6 pt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
        
        {/* INVENTORY PANEL */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-5 bg-white border-4 border-[#8C4B3A] rounded-3xl p-8 shadow-[8px_8px_0px_#E07A5F] flex flex-col h-[80vh] sticky top-24"
        >
          <div className="flex items-center gap-3 mb-6 border-b-2 border-dashed border-[#8C4B3A]/20 pb-4">
            <div className="bg-[#F2CC8F] p-3 rounded-xl">
              <ChefHat size={28} className="text-[#8C4B3A]" />
            </div>
            <div>
              <h2 className="font-title text-2xl">INVENTÁRIO</h2>
              <p className="opacity-70 text-sm">O que tem na geladeira hoje?</p>
            </div>
          </div>

          <form onSubmit={addIngredient} className="flex gap-2 mb-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={currentUser?.id ? "Ex: Tomate, Frango..." : "Entre para gerenciar seu inventário"}
              disabled={!currentUser?.id || isSavingIngredient}
              className="flex-1 bg-[#FEFAF0] border-2 border-[#8C4B3A] rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-[#F2CC8F]/50 transition-shadow"
            />
            <button
              type="submit"
              disabled={!currentUser?.id || isSavingIngredient}
              className="bg-[#8C4B3A] text-white p-3 rounded-xl hover:bg-[#E07A5F] transition-colors shadow-[3px_3px_0px_#E07A5F] active:shadow-none active:translate-y-1 active:translate-x-1"
            >
              <Plus size={24} />
            </button>
          </form>

          <div className="flex-1 overflow-y-auto mb-6">
            {isLoadingInventory && (
              <p className="text-center opacity-60 py-4">Carregando seu inventário...</p>
            )}
            <AnimatePresence>
              <div className="flex flex-wrap gap-3">
                {ingredients.map((ing) => (
                  <motion.div
                    key={ing}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2 bg-[#F2CC8F]/30 border-2 border-[#8C4B3A] px-4 py-2 rounded-full font-medium"
                  >
                    {ing}
                    <button
                      onClick={() => removeIngredient(ing)}
                      className="text-[#8C4B3A]/60 hover:text-[#E07A5F] transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
            
            {ingredients.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center opacity-40 text-center p-6">
                <Info size={48} className="mb-4" />
                <p className="text-xl">Sua geladeira digital está vazia.</p>
                <p>Adicione ingredientes para começar a mágica.</p>
              </div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGenerateClick}
            disabled={isGenerating || ingredients.length === 0}
            className="w-full bg-[#E07A5F] text-[#FEFAF0] py-4 rounded-2xl font-title text-xl shadow-[4px_4px_0px_#8C4B3A] hover:bg-[#8C4B3A] hover:shadow-[2px_2px_0px_#F2CC8F] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, ease: "linear", duration: 1 }}>
                <Wand2 size={24} />
              </motion.div>
            ) : (
              <Wand2 size={24} />
            )}
            {isGenerating ? "CRIANDO RECEITA..." : "GERAR RECEITA COM IA"}
          </motion.button>
        </motion.div>

        {/* RECIPE RESULT PANEL */}
        <div className="md:col-span-7">
          <AnimatePresence mode="wait">
            {!generatedRecipe && !isGenerating ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full border-4 border-dashed border-[#8C4B3A]/20 rounded-3xl flex flex-col items-center justify-center text-center p-12 opacity-60"
              >
                <div className="w-32 h-32 mb-8 bg-[#F2CC8F]/30 rounded-full flex items-center justify-center">
                  <Wand2 size={64} className="text-[#E07A5F]" />
                </div>
                <h3 className="font-title text-3xl mb-4">A MAGIA ACONTECE AQUI</h3>
                <p className="text-xl max-w-md">
                  Preencha o seu inventário ao lado e clique em gerar receita para ver a IA transformar seus ingredientes.
                </p>
              </motion.div>
            ) : isGenerating ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="h-full flex flex-col items-center justify-center text-center p-12"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mb-8"
                >
                  <ChefHat size={80} className="text-[#E07A5F]" />
                </motion.div>
                <h3 className="font-title text-3xl mb-2 animate-pulse">Cruzando ingredientes...</h3>
                <p className="text-xl opacity-70">Analisando combinações possíveis no banco de dados</p>
              </motion.div>
            ) : generatedRecipe ? (
              <motion.div
                key="recipe"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border-4 border-[#8C4B3A] rounded-3xl overflow-hidden shadow-[8px_8px_0px_#F2CC8F]"
              >
                <div className="bg-[#8C4B3A] text-[#FEFAF0] p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#E07A5F] rounded-full blur-[80px] opacity-40"></div>
                  <h2 className="font-title text-4xl mb-4 relative z-10 text-[#FEFAF0] drop-shadow-md">{generatedRecipe.title}</h2>
                  <div className="flex gap-6 relative z-10 font-medium text-lg">
                    <span className="flex items-center gap-2 bg-[#FEFAF0]/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                      <Clock size={20} /> {generatedRecipe.time}
                    </span>
                    <span className="flex items-center gap-2 bg-[#FEFAF0]/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                      <Flame size={20} /> {generatedRecipe.difficulty}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-8 text-xl">
                  {/* Tags */}
                  <div className="flex gap-3">
                    {generatedRecipe.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-2 bg-[#F2CC8F]/30 text-[#8C4B3A] px-4 py-1 rounded-full text-sm font-bold border-2 border-[#8C4B3A]/20">
                        <Leaf size={16} /> {tag}
                      </span>
                    ))}
                  </div>

                  {/* AI Tip */}
                  <div className="bg-[#E07A5F]/10 border-l-4 border-[#E07A5F] p-6 rounded-r-2xl text-lg">
                    <strong className="flex items-center gap-2 text-[#E07A5F] mb-2 font-title text-xl">
                      <Wand2 size={24} /> Dica da I.A.
                    </strong>
                    <p>{generatedRecipe.aiTip}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Ingredients */}
                    <div>
                      <h3 className="font-title text-2xl mb-6 flex items-center gap-3 border-b-2 border-dashed border-[#8C4B3A]/20 pb-4">
                        Ingredientes
                      </h3>
                      <ul className="space-y-4">
                        {generatedRecipe.ingredients.map((ing, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#E07A5F]"></div>
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Steps */}
                    <div>
                      <h3 className="font-title text-2xl mb-6 flex items-center gap-3 border-b-2 border-dashed border-[#8C4B3A]/20 pb-4">
                        Modo de Preparo
                      </h3>
                      <ol className="space-y-6">
                        {generatedRecipe.steps.map((step, i) => (
                          <li key={i} className="flex gap-4">
                            <span className="font-title text-[#F2CC8F] text-2xl drop-shadow-[1px_1px_0px_#8C4B3A]">
                              {i + 1}
                            </span>
                            <span className="pt-1">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t-2 border-dashed border-[#8C4B3A]/20 flex justify-end">
                    <button
                    onClick={handleSaveRecipe}
                    className="px-6 py-3 border-2 border-[#8C4B3A] text-[#8C4B3A] rounded-xl font-bold hover:bg-[#8C4B3A] hover:text-[#FEFAF0] transition-colors flex items-center gap-2"
                  >
                    <Save size={18} />
                    Salvar Receita
                  </button>
                </div>
              </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

      </div>

      {/* AUTH MODAL */}
      <AnimatePresence>
        {isAuthModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute inset-0 bg-[#8C4B3A]/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#FEFAF0] border-4 border-[#8C4B3A] rounded-3xl p-8 w-full max-w-lg relative z-10 shadow-[12px_12px_0px_#E07A5F] max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsAuthModalOpen(false)}
                className="absolute top-6 right-6 text-[#8C4B3A]/50 hover:text-[#E07A5F] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#F2CC8F] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#8C4B3A] shadow-[4px_4px_0px_#8C4B3A]">
                  <Wand2 size={32} className="text-[#8C4B3A]" />
                </div>
                <h2 className="font-title text-3xl text-[#8C4B3A] mb-2">SINTA O SABOR!</h2>
                <p className="text-lg opacity-80">
                  {authMode === "login" 
                    ? "Faça login para salvar suas receitas e perfil." 
                    : "Crie seu perfil para personalizar cada receita."}
                </p>
              </div>

              <div className="flex gap-2 mb-8 bg-[#8C4B3A]/10 p-1 rounded-xl">
                <button 
                  onClick={() => setAuthMode("login")}
                  className={clsx(
                    "flex-1 py-3 rounded-lg font-title text-lg transition-all",
                    authMode === "login" ? "bg-[#8C4B3A] text-white shadow-md" : "text-[#8C4B3A] hover:bg-[#8C4B3A]/10"
                  )}
                >
                  ENTRAR
                </button>
                <button 
                  onClick={() => setAuthMode("signup")}
                  className={clsx(
                    "flex-1 py-3 rounded-lg font-title text-lg transition-all",
                    authMode === "signup" ? "bg-[#8C4B3A] text-white shadow-md" : "text-[#8C4B3A] hover:bg-[#8C4B3A]/10"
                  )}
                >
                  CRIAR CONTA
                </button>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-6">
                {authMode === "signup" && (
                  <div className="space-y-6">
                    {/* Foto de Perfil (Opcional) */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-24 h-24 bg-[#E07A5F]/20 rounded-full border-2 border-dashed border-[#E07A5F] flex items-center justify-center text-[#E07A5F] cursor-pointer hover:bg-[#E07A5F]/30 transition-colors">
                        <Camera size={32} />
                      </div>
                      <span className="text-sm font-medium opacity-70">Adicionar foto (opcional)</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold uppercase tracking-wider mb-2">Nome</label>
                        <div className="relative">
                          <UserIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C4B3A]/50" />
                          <input 
                            type="text" 
                            placeholder="Como quer ser chamado?"
                            value={signupData.name}
                            onChange={(e) => setSignupData({...signupData, name: e.target.value})}
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
                              onClick={() => setDiet(opt)}
                              className={clsx(
                                "py-2 px-1 text-sm font-medium rounded-xl border-2 transition-all",
                                diet === opt 
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
                              onClick={() => toggleAllergy(opt)}
                              className={clsx(
                                "flex-1 py-2 text-sm font-medium rounded-xl border-2 transition-all",
                                allergies.includes(opt)
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
                  </div>
                )}

                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2">E-mail</label>
                    <div className="relative">
                      <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C4B3A]/50" />
                      <input 
                        type="email" 
                        placeholder="seu@email.com"
                        value={authMode === "signup" ? signupData.email : loginData.email}
                        onChange={(e) => authMode === "signup" 
                          ? setSignupData({...signupData, email: e.target.value})
                          : setLoginData({...loginData, email: e.target.value})
                        }
                        className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[#8C4B3A]/30 rounded-xl focus:border-[#E07A5F] focus:outline-none transition-colors text-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2">Senha</label>
                    <div className="relative">
                      <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8C4B3A]/50" />
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        value={authMode === "signup" ? signupData.password : loginData.password}
                        onChange={(e) => authMode === "signup" 
                          ? setSignupData({...signupData, password: e.target.value})
                          : setLoginData({...loginData, password: e.target.value})
                        }
                        className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[#8C4B3A]/30 rounded-xl focus:border-[#E07A5F] focus:outline-none transition-colors text-lg"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E07A5F] text-[#FEFAF0] py-4 rounded-xl font-title text-xl shadow-[4px_4px_0px_#8C4B3A] hover:bg-[#8C4B3A] hover:shadow-[2px_2px_0px_#F2CC8F] transition-all mt-4"
                >
                  {authMode === "login" ? "ENTRAR E GERAR RECEITA" : "CRIAR CONTA E GERAR RECEITA"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
