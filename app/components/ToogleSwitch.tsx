import { useState, useEffect } from "react";
import { Toggle } from "@/components/ui/toggle";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkmode, setDarkMode] = useState(() => {
    // Check localStorage directly during the first render
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme === "dark" || storedTheme === null; // Default to dark
    }
    return true; // Fallback to dark during SSR
  });

  useEffect(() => {
    // Sync the theme to localStorage and document class
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  return (
    <div className="flex">
      <Toggle
        aria-label="Toggle theme"
        onClick={() => setDarkMode((prevMode) => !prevMode)}
      >
        {darkmode ? <MdSunny /> : <FaMoon />}
      </Toggle>
    </div>
  );
};

export default ThemeToggle;
