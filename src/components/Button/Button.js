import React from "react";
import "./Button.css";

function Button({ title, onClick, type }) {
  const handleClick = (event) => {
    if (type !== "submit") {
      event.preventDefault();
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button type={type} className="button" onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;
