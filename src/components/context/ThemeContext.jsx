import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() =>
    JSON.parse(localStorage.getItem("isDark"))
  );
  const [dark, setDark] = useState("");
  const [cardDark, setCardDark] = useState("");
  console.log(isDark);
  function handleIsDark() {
    setIsDark((isDark) => !isDark);
    localStorage.setItem("isDark", !isDark);
  }

  useEffect(() => {
    setDark((dark) => (isDark ? "dark" : ""));
    setCardDark((dark) => (isDark ? "card-dark" : ""));
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, dark, cardDark, handleIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside the Provider");
  return context;
}

export { ThemeProvider, useTheme };
