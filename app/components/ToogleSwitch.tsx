import { useState, useEffect } from "react";
import { Toggle } from "@/components/ui/toggle";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkmode, setDarkMode] = useState(() => {
    // Check if the code is running in the browser
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme === "dark"; // If localStorage has dark mode, set to true
    }
    return true; // Default to dark mode if not in the browser
  });

  useEffect(() => {
    // Ensure this runs only on the client-side
    if (typeof window !== "undefined") {
      if (darkmode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkmode]);

  return (
    <div>
      <Toggle aria-label="Toggle theme" onClick={() => setDarkMode(!darkmode)}>
        <FaMoon className="dark:hidden block" />
        <MdSunny className="dark:block hidden" />
      </Toggle>
    </div>
  );
};

export default ThemeToggle;
