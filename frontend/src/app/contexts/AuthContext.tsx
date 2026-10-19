import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import api from "../../services/api";

export type SavedRecipe = {
  id: number;
  title: string;
  time: string;
  difficulty: string;
  servings?: string;
  preparation?: string;
  ingredients?: Array<{
    ingredienteId?: number;
    quantidade?: number;
    unidade?: string;
    opcional?: boolean;
    ingrediente?: { nome: string };
    nome?: string;
  }>;
  author?: string;
  authorId?: number;
  image?: string;
  tags?: string[];
  aiTip?: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  avatar?: string | null;
  diet: string;
  allergies: string[];
  profileLoaded?: boolean;
  savedRecipes?: SavedRecipe[];
};

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("reinventa-user");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("reinventa-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("reinventa-user");
    }
  }, [user]);

  useEffect(() => {
    if (!user || !localStorage.getItem("reinventa-token")) return;
    const loadAccountData = async () => {
      try {
        const [{ data: profileData }, { data: favoriteData }] = await Promise.all([
          api.get("/users/me"),
          api.get("/favoritos")
        ]);
        const profile = profileData.user;
        const savedRecipes = (favoriteData.favoritos ?? []).map((favorite: any) => ({
          id: favorite.receita.id,
          title: favorite.receita.titulo,
          time: String(favorite.receita.tempoEstimado),
          difficulty: "",
          servings: String(favorite.receita.porcoes),
          preparation: favorite.receita.modoPreparo,
          ingredients: favorite.receita.ingredientes,
          author: favorite.receita.usuario?.nome,
          authorId: favorite.receita.usuarioId
        }));
        setUser((current) => current ? {
          ...current,
          name: profile.nome,
          email: profile.email,
          avatar: profile.avatar,
          diet: profile.tipoDieta,
          allergies: profile.restricoes,
          profileLoaded: true,
          savedRecipes
        } : current);
      } catch {
        setUser((current) => current ? { ...current, profileLoaded: false } : current);
      }
    };
    loadAccountData();
  }, [user?.id]);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("reinventa-token");
    setUser(null);
  };

  const updateUser = (userData: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...userData } : null));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
