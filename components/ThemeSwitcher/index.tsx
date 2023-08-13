import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ImageComponent from "../ImageComponent";

const ThemeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="bg-gray-100 dark:bg-gray-100 border border-gray-100 p-2 rounded-full hover:bg-gray-100"
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <ImageComponent
        src={theme === "light" ? "/images/moon.svg" : "/images/sun.svg"}
        width={24}
        height={24}
        alt={theme === "light" ? "Moon icon" : "Sun icon"}
      />
    </button>
  );
};

export default ThemeSwitch;
