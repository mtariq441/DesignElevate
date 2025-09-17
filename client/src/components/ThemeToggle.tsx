import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Default to dark mode with premium theme
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark"; // Default to dark mode
    
    setTheme(initialTheme);
    updateTheme(initialTheme);
  }, []);

  const updateTheme = (newTheme: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    updateTheme(newTheme);
    console.log(`Theme changed to ${newTheme}`);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-12 h-12 glass neon-border hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-110 group"
      data-testid="button-theme-toggle"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-neon-cyan group-hover:text-neon-purple transition-colors duration-300" />
      ) : (
        <Sun className="h-5 w-5 text-neon-cyan group-hover:text-neon-purple transition-colors duration-300 animate-pulse" />
      )}
    </Button>
  );
}