import React from "react";
import "./style.css";

const Output = ({ output }) => {
  return <div className="outputText">{output ? output : 0}</div>;
};

export default Output;
