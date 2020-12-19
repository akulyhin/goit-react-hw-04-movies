import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404</h1>
      <h2>Упс, страница не найдена!</h2>
      <Link to="/">На главную</Link>
    </div>
  );
}
