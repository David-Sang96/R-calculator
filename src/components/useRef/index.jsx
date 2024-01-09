import React, { useRef, useState } from "react";
import "./style.css";

const useRefer = () => {
  const [value, setValue] = useState([]);
  const name = useRef("");
  const email = useRef("");
  const message = useRef("");

  const handleSubmit = () => {
    const data = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    };
    setValue((prev) => [...prev, data]);
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };

  const changeToRed = () => {
    name.current.style.border = "2px solid red";
    email.current.style.border = "2px solid red";
    message.current.style.border = "2px solid red";
    name.current.focus();
  };
  const changeToBlue = () => {
    name.current.style.border = "2px solid blue";
    email.current.style.border = "2px solid blue";
    message.current.style.border = "2px solid blue";
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input
            ref={name}
            type="text"
            className="userName"
            placeholder="Enter your name..."
          />
        </div>
        <div className="form-group">
          <input
            ref={email}
            type="email"
            className="userEmail"
            placeholder="Enter your email..."
          />
        </div>
        <div className="form-group">
          <textarea
            ref={message}
            className="userMessage"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your message..."
          ></textarea>
        </div>
        <div className="form-group">
          <button
            className="contact"
            type="button"
            onClick={() => handleSubmit()}
          >
            Create
          </button>
        </div>
        <div className="form-group">
          <button
            className="btn-danger contact"
            type="button"
            onClick={() => changeToRed()}
          >
            Change RED
          </button>
          <button
            className="btn-primary contact"
            type="button"
            onClick={() => changeToBlue()}
          >
            Change BLUE
          </button>
        </div>
      </form>
      {value &&
        value.map((item) => (
          <div key={item.name}>
            <div>{item.name}</div>
            <div>{item.email}</div>
            <div>{item.message}</div>
          </div>
        ))}
    </div>
  );
};

export default useRefer;
