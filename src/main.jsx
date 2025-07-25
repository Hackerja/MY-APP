import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // This imports your App.jsx
import "./index.css";     // Your Tailwind CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>   {/* ✅ MUST WRAP App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
