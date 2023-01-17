import React from "react";
import ReactDOM from "react-dom/client";
import { DarkModeContextProvider } from "./context/darkModeContext";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
