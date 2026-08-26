import { type ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

import { useAuth } from "../contexts/AuthContext";
import { AuthModal } from "./AuthModal";

type AuthMode = "login" | "signup";

interface AuthActionButtonProps {
  children: ReactNode;
  className?: string;
  initialMode?: AuthMode;
  to?: string;
  onAuthenticated?: () => void;
}

export const AuthActionButton = ({
  children,
  className,
  initialMode = "login",
  to = "/tool",
  onAuthenticated,
}: AuthActionButtonProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const executeAction = () => {
    if (onAuthenticated) {
      onAuthenticated();
      return;
    }

    navigate(to);
  };

  const handleClick = () => {
    if (user) {
      executeAction();
      return;
    }

    setIsAuthModalOpen(true);
  };

  return (
    <>
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={className}
      >
        {children}
      </motion.button>

      {createPortal(
        <AuthModal
          open={isAuthModalOpen}
          onOpenChange={setIsAuthModalOpen}
          initialMode={initialMode}
          onSuccess={executeAction}
        />,
        document.body
      )}
    </>
  );
};
