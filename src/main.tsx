import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./i18n.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
