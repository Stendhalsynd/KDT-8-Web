import { createContext } from "react";

const GlobalContext = createContext({
  theme: "",
  language: "",
  setTheme: () => {},
  setLanguage: () => {},
});

export default GlobalContext;
