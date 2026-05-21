import { NavLink } from "react-router";
import { Utensils, User } from "lucide-react";
import { motion } from "motion/react";
import { useAuth } from "../contexts/AuthContext";

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-[#FEFAF0]/80 backdrop-blur-md border-b-2 border-[#8C4B3A]/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-10 h-10 rounded-full bg-[#E07A5F] flex items-center justify-center text-[#FEFAF0]"
          >
            <Utensils size={20} />
          </motion.div>
          <span className="font-title text-xl tracking-wide text-[#8C4B3A] group-hover:text-[#E07A5F] transition-colors">
            REINVENTA<br />GOURMET
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <NavLink 
            to="/" 
            className={({isActive}) => `transition-colors hover:text-[#E07A5F] ${isActive ? "text-[#E07A5F] underline decoration-wavy underline-offset-4" : "text-[#8C4B3A]"}`}
          >
            Início
          </NavLink>
          <NavLink 
            to="/community" 
            className={({isActive}) => `transition-colors hover:text-[#E07A5F] ${isActive ? "text-[#E07A5F] underline decoration-wavy underline-offset-4" : "text-[#8C4B3A]"}`}
          >
            Comunidade
          </NavLink>

          {user && (
            <NavLink 
              to="/profile"
              className={({isActive}) => `flex items-center gap-2 transition-colors hover:text-[#E07A5F] ${isActive ? "text-[#E07A5F]" : "text-[#8C4B3A]"}`}
            >
              {({isActive}) => (
                <>
                  <div className={`w-10 h-10 rounded-full border-2 border-[#8C4B3A] overflow-hidden flex items-center justify-center bg-[#F2CC8F] ${isActive ? "border-[#E07A5F] shadow-[2px_2px_0px_#E07A5F]" : ""}`}>
                    {user.avatar ? (
                      <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User size={20} />
                    )}
                  </div>
                  <span className={`font-title ${isActive ? "underline decoration-wavy underline-offset-4" : ""}`}>Meu Perfil</span>
                </>
              )}
            </NavLink>
          )}

          <NavLink to="/tool">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#F2CC8F] border-2 border-[#8C4B3A] shadow-[4px_4px_0px_#8C4B3A] rounded-xl font-title text-[#8C4B3A] text-lg hover:bg-[#E07A5F] hover:text-[#FEFAF0] hover:shadow-[2px_2px_0px_#8C4B3A] transition-all"
            >
              REINVENTE!
            </motion.button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
