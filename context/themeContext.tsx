import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeType } from "../types";


export const ThemeContext = createContext({theme: "dark", setTheme: (theme: ThemeType) => {}});

const ThemeContextProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<ThemeType>("dark")

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

  return <ThemeContext.Provider value={{theme, setTheme: handleSetTheme}}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeContextProvider;
