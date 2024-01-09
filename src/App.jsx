import React, { useContext } from "react";

import { ThemeContext } from "./components/context/ThemeContext";

 useContext
const App = () => {
  const text = useContext(ThemeContext);
  return <div className={`${text === "dark" ? "bgDark" : ""} view`}>App </div>;
};

 