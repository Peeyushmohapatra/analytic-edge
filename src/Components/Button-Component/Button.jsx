import React from "react";
import "./button.css";
const Button = ({ text, setPage }) => {
  return (
    <button
      className="button"
      onClick={(e) => {
        setPage((e.target.innerText - 1) * 10);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
