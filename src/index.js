import React from "react";
import ReactDom from "react-dom";
import { Canvas } from "./components/Canvas/Canvas";

ReactDom.render(
  <React.StrictMode>
    <Canvas />
  </React.StrictMode>,
  document.getElementById("root")
);
