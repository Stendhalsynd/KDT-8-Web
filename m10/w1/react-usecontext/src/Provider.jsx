import { useState } from "react";
import MyContext from "./store";
import GlobalContext from "./store2";

export default function Provider({ children }) {
  const [language, setLanguage] = useState("ko");
  const [theme, setTheme] = useState("orange");

  return (
    <GlobalContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}
