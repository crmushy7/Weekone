import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./screens/Home";
import Trial from "./screens/Trial";
import DivCreator from "./components/DivCreator";
import App from "./screens/App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
