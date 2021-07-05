import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Wrapper() {
  return <App />;
}

ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  document.getElementById("root")
);
