import { useState } from "react";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import Output from "./components/output/Output";

function App() {
  const [outputValue, setOutputValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue.length - 1);

  if (inputValue[0] === "0") {
    setInputValue("");
  }

  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const eventHandling = (value) => {
    if (value === "C") {
      setOutputValue("");
      setInputValue("");
    } else if (value === "AC") {
      setInputValue(inputValue.slice(0, -1));
    } else if (value === "=") {
      if (number.includes(inputValue[inputValue.length - 1])) {
        // eslint-disable-next-line no-eval
        setOutputValue(eval(inputValue));
        setInputValue("");
      } else {
        return alert("Pls select an integer");
      }
    } else {
      setInputValue(inputValue + value);
      setOutputValue("");
    }
  };

  return (
    <div className="container">
      <div className="calculator_box">
        <Output output={outputValue} />
        <Input input={inputValue} />
        <Button eventHandling={eventHandling} />
      </div>
    </div>
  );
}

export default App;
