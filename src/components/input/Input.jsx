import React from "react";
import "./style.css";

const Input = ({ input }) => {
  return <div className="inputText">{input ? input : 0}</div>;
};

export default Input;
