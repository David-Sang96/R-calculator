import { createContext } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const theme = "light";

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
