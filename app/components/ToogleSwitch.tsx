"use client";
import { useState, useEffect } from "react";
import { Toggle } from "@/components/ui/toggle";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkmode, setDarkMode] = useState(() => {
    // Initialize darkmode based on localStorage value
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark"; // If localStorage has dark mode, set to true
  });

  useEffect(() => {
    // Update the document class and localStorage based on darkmode state
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
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
