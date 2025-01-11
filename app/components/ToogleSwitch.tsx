import { useState, useEffect } from "react";
import { Toggle } from "@/components/ui/toggle";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
const ThemeToogle = () => {
  const [darkmode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);
  useEffect(() => {
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
      <Toggle onClick={() => setDarkMode(!darkmode)}>
        <FaMoon className="dark:hidden block" />
        <MdSunny className="dark:block hidden" />
      </Toggle>
    </div>
  );
};

export default ThemeToogle;
