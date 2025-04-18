import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
  "div",
  { className: "App" },
  "Hello World"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);