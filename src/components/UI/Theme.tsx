import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";


const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    console.log("Loaded theme from localStorage:", storedTheme);
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
     console.log("Toggling theme. New theme will be:", newTheme ? "dark" : "light"); 
    setDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    console.log("HTML class now:", document.documentElement.className); // ✅ DEBUG LOG
  };

  return (
    <label
      htmlFor="theme-toggle"
      className="relative block h-8 w-14 rounded-full bg-gray-600 dark:bg-teal-600 transition-colors cursor-pointer"
    >
      <input
        type="checkbox"
        id="theme-toggle"
        className="peer sr-only"
        checked={darkMode}
        onChange={toggleTheme}
      />
      <span
        className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white dark:bg-gray-800 transition-all peer-checked:start-6"
      >{darkMode ? <FaMoon color='yellow' className='p-1 size-6'/> : <FaSun color='orange' className='p-1 size-6'/>}</span>
    </label>
  );
};

export default Theme;
