import "./styles.scss";
import React from "react";

function Radio({ id, value, label, inputName, onChangeValue }) {
  const onClickCheckbox = () => {
    const input = document.getElementById(id);
    input.checked = true;
  };

  const onSetValue = () => {
    onChangeValue(value, inputName);
  };

  return (
    <div onClick={onSetValue}>
      <input type="radio" value={value} id={id} name={inputName} hidden />
      <div className="checkbox" onClick={onClickCheckbox}></div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Radio;