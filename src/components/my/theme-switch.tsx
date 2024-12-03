"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="text-gray-300 hover:text-white h-7">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")} className="p-0">
          <MdOutlineLightMode className="w-8 h-8" />
        </button>
      ) : (
        <button onClick={() => setTheme("light")} className="p-0">
          <MdOutlineDarkMode className="w-8 h-8" />
        </button>
      )}
    </div>
  );
}
