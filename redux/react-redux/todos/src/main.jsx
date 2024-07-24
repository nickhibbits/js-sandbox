import React from "react";
import ReactDOM from "react-dom/client";
import { ConnectedApp } from "./App.jsx";
import "./index.css";
import StoreProvider from "./Todos/provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <ConnectedApp />
    </StoreProvider>
  </React.StrictMode>
);
