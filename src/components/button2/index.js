
import React from "react";
import "./styles.scss";


function Button({ type, children }) {
  return <button type={type}>{children}</button>;
}

export default Button;
