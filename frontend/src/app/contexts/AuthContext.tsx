import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type SavedRecipe = {
  id: number;
  title: string;
  time: string;
  difficulty: string;
  author?: string;
  image?: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  avatar?: string | null;
  diet: string;
  allergies: string[];
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
