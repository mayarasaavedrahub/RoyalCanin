import React from "react";
import "./styles.scss";

function Input({ id, type, value, inputName, placeholder, onChangeValue }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        id={id}
        name={inputName}
        placeholder={placeholder}
        onChange={(e) => onChangeValue(e.target.value, inputName)}
      />
    </div>
  );
}

export default Input;
