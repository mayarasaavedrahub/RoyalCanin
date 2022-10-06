import React from "react";
import "./styles.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "../../views/form";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/rc_credenciamento" element={<Form />} />
        <Route path="/rc_credenciamento/*" element={<Navigate to="/rc_credenciamento" />} />
      </Routes>
    </div>
  );
}

export default App;