import { useEffect, useState } from "react";
import { ThemeType } from "../types/general";

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    savedTheme !== null && handleSetTheme(savedTheme as ThemeType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSetTheme = (theme: ThemeType) => {
    setTheme(theme);
    document.documentElement.classList[
      theme === "dark" ? "add" : "remove"]("dark");
    localStorage.setItem("theme", theme);
  }

  return {
    setTheme: handleSetTheme,
    theme
  }
}

export default useTheme;