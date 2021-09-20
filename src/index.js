import { StrictMode } from "react";
import ReactDOM from "react-dom";

import AppWrapper from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
  rootElement
);
