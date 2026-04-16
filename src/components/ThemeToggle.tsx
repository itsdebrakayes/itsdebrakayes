import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed right-6 top-6 z-50 flex h-11 w-11 items-center justify-center rounded-full glass cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={18} className="text-amber-400" />
      ) : (
        <Moon size={18} className="text-foreground" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
