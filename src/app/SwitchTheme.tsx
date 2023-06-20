//SwitchTheme.tsx
"use client";
import React, { useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useLocalStorage } from "usehooks-ts";
const SwitchTheme = () => {
  //we store the theme in localStorage to preserve the state on next visit with an initial theme of dark.
  const [theme, setTheme] = useLocalStorage("theme", "night");

  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === "night" ? "winter" : "night");
  };

  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);


  return (
    <button className="btn btn-sm btn-circle swap swap-flip" onClick={toggleTheme}>
      {theme === "night" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
};

export default SwitchTheme;

