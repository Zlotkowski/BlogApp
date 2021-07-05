import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeContextProvider } from "./ThemeContext";

function Wrapper() {
  return <App />;
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Wrapper />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
