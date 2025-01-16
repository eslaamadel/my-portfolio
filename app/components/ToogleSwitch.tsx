"use client";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is only rendered after it's mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or nothing during SSR
    return null;
  }

  return (
    <div className="flex">
      <Toggle
        aria-label="Toggle theme"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? <MdSunny /> : <FaMoon />}
      </Toggle>
    </div>
  );
};

export default ThemeToggle;
