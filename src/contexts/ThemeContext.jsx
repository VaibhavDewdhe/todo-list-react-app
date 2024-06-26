import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <ThemeContext.Provider
      value={{ theme, isLight: theme === "light", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
