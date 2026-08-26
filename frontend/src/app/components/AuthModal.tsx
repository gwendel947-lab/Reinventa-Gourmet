import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Camera, Lock, Mail, User as UserIcon, Wand2, X } from "lucide-react";
import { toast } from "sonner";
import clsx from "clsx";

import { useAuth } from "../contexts/AuthContext";

type AuthMode = "login" | "signup";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialMode?: AuthMode;
  onSuccess?: () => void;
}

export const AuthModal = ({ open, onOpenChange, initialMode = "login", onSuccess }: AuthModalProps) => {
  const { login } = useAuth();
  const [authMode, setAuthMode] = useState<AuthMode>(initialMode);
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [diet, setDiet] = useState("Come de tudo");
  const [allergies, setAllergies] = useState<string[]>([]);

  const close = () => onOpenChange(false);

  const toggleAllergy = (allergy: string) => {
    setAllergies((previous) =>
      previous.includes(allergy)
        ? previous.filter((item) => item !== allergy)
        : [...previous, allergy]
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (authMode === "signup") {
      if (!signupData.name || !signupData.email || !signupData.password) {
        toast.error("Preencha todos os campos!");
        return;
      }

      login({
        name: signupData.name,
        email: signupData.email,
        diet,
        allergies,
      });
      toast.success(`Bem-vindo(a), ${signupData.name}! Suas preferências foram salvas.`);
    } else {
      if (!loginData.email || !loginData.password) {
        toast.error("Preencha todos os campos!");
        return;
      }

      login({
        name: "Usuário Teste",
        email: loginData.email,
        diet: "Come de tudo",
        allergies: [],
      });
      toast.success("Login efetuado com sucesso!");
    }

    close();
    onSuccess?.();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-[#8C4B3A]/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-[#FEFAF0] border-4 border-[#8C4B3A] rounded-3xl p-8 w-full max-w-lg relative z-10 shadow-[12px_12px_0px_#E07A5F] max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar modal"
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
                type="button"
                onClick={() => setAuthMode("login")}
                className={clsx(
                  "flex-1 py-3 rounded-lg font-title text-lg transition-all",
                  authMode === "login"
                    ? "bg-[#8C4B3A] text-white shadow-md"
                    : "text-[#8C4B3A] hover:bg-[#8C4B3A]/10"
                )}
              >
                ENTRAR
              </button>
              <button
                type="button"
                onClick={() => setAuthMode("signup")}
                className={clsx(
                  "flex-1 py-3 rounded-lg font-title text-lg transition-all",
                  authMode === "signup"
                    ? "bg-[#8C4B3A] text-white shadow-md"
                    : "text-[#8C4B3A] hover:bg-[#8C4B3A]/10"
                )}
              >
                CRIAR CONTA
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {authMode === "signup" && (
                <div className="space-y-6">
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
                          onChange={(event) => setSignupData({ ...signupData, name: event.target.value })}
                          className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[#8C4B3A]/30 rounded-xl focus:border-[#E07A5F] focus:outline-none transition-colors text-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider mb-2">Perfil Alimentar</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Come de tudo", "Vegetariano", "Vegano"].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setDiet(option)}
                            className={clsx(
                              "py-2 px-1 text-sm font-medium rounded-xl border-2 transition-all",
                              diet === option
                                ? "bg-[#F2CC8F] border-[#8C4B3A] shadow-[2px_2px_0px_#8C4B3A] text-[#8C4B3A]"
                                : "bg-white border-[#8C4B3A]/20 text-[#8C4B3A]/60 hover:border-[#8C4B3A]/40"
                            )}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider mb-2">Restrições / Alergias</label>
                      <div className="flex gap-3">
                        {["Sem Glúten", "Sem Lactose"].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleAllergy(option)}
                            className={clsx(
                              "flex-1 py-2 text-sm font-medium rounded-xl border-2 transition-all",
                              allergies.includes(option)
                                ? "bg-[#E07A5F] border-[#8C4B3A] shadow-[2px_2px_0px_#8C4B3A] text-white"
                                : "bg-white border-[#8C4B3A]/20 text-[#8C4B3A]/60 hover:border-[#8C4B3A]/40"
                            )}
                          >
                            {option}
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
                      onChange={(event) => authMode === "signup"
                        ? setSignupData({ ...signupData, email: event.target.value })
                        : setLoginData({ ...loginData, email: event.target.value })
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
                      onChange={(event) => authMode === "signup"
                        ? setSignupData({ ...signupData, password: event.target.value })
                        : setLoginData({ ...loginData, password: event.target.value })
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
  );
};
