
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/Menu";

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <React.StrictMode>
    <App root={root} />
  </React.StrictMode>
);