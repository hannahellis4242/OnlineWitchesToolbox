import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container!);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
