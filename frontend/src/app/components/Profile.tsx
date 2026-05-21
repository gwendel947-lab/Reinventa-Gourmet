import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "../contexts/AuthContext";
import { User, LogOut, Settings, Camera, Heart, BookOpen, Clock, Flame, ArrowRight, X, Save } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import clsx from "clsx";

const myRecipesData = [
  {
    id: 1,
    title: "Omelete de Abobrinha Rústico",
    time: "15 min",
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1598449426314-8b02525e8733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwZm9vZHxlbnwxfHx8fDE3NzY5NTczMDN8MA&ixlib=rb-4.1.0&q=80&w=600&utm_source=figma&utm_medium=referral",
    likes: 12,
    comments: 3
  },
  {
    id: 2,
    title: "Bolo de Caneca Mágico",
    time: "5 min",
    difficulty: "Muito Fácil",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0fGVufDF8fHx8MTc3Njk1NzMwM3ww&ixlib=rb-4.1.0&q=80&w=600&utm_source=figma&utm_medium=referral",
    likes: 45,
    comments: 8
  }
];

const savedRecipesData = [
  {
    id: 10,
    title: "Massa Cremosa 'De Ontem'",
    time: "20 min",
    difficulty: "Médio",
    author: "Ana Costa"
  },
  {
    id: 11,
    title: "Patê de Cenoura Assada",
    time: "30 min",
    difficulty: "Fácil",
    author: "João Pedro"
  }
];

export const Profile = () => {
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"minhas" | "favoritas">("minhas");

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
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#E07A5F] rounded-full border-2 border-[#8C4B3A] flex items-center justify-center text-white hover:bg-[#8C4B3A] transition-colors shadow-sm">
                <Camera size={18} />
              </button>
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
            onClick={() => setActiveTab("minhas")}
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
            onClick={() => setActiveTab("favoritas")}
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
              {myRecipesData.map(recipe => (
                <div key={recipe.id} className="bg-white border-4 border-[#8C4B3A] rounded-3xl overflow-hidden shadow-[6px_6px_0px_#F2CC8F] hover:shadow-[8px_8px_0px_#E07A5F] hover:-translate-y-1 transition-all group flex flex-col">
                  <div className="h-48 overflow-hidden border-b-4 border-[#8C4B3A]">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-title text-2xl mb-3 leading-tight">{recipe.title}</h3>
                    <div className="flex items-center gap-4 text-sm font-bold opacity-70 mb-6">
                      <span className="flex items-center gap-1"><Clock size={16} /> {recipe.time}</span>
                      <span className="flex items-center gap-1"><Flame size={16} /> {recipe.difficulty}</span>
                    </div>
                    <div className="mt-auto pt-4 border-t-2 border-dashed border-[#8C4B3A]/20 flex justify-between items-center text-[#8C4B3A]/70 font-bold text-sm">
                      <span className="flex items-center gap-1"><Heart size={18} className="text-[#E07A5F]" /> {recipe.likes}</span>
                      <button className="flex items-center gap-1 hover:text-[#E07A5F] transition-colors">
                        Ver Receita <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
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
              className="grid md:grid-cols-2 gap-6"
            >
              {savedRecipesData.map(recipe => (
                <div key={recipe.id} className="bg-white border-4 border-[#8C4B3A] rounded-2xl p-5 shadow-[6px_6px_0px_#E07A5F] flex items-center justify-between group hover:-translate-y-1 transition-all">
                  <div>
                    <h3 className="font-title text-xl mb-2">{recipe.title}</h3>
                    <div className="flex items-center gap-4 text-sm font-bold opacity-70">
                      <span className="flex items-center gap-1"><User size={16} /> {recipe.author}</span>
                      <span className="flex items-center gap-1"><Clock size={16} /> {recipe.time}</span>
                    </div>
                  </div>
                  <button className="w-12 h-12 rounded-xl bg-[#F2CC8F] flex items-center justify-center border-2 border-[#8C4B3A] text-[#8C4B3A] group-hover:bg-[#E07A5F] group-hover:text-white transition-colors shadow-[2px_2px_0px_#8C4B3A]">
                    <ArrowRight size={24} />
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

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