import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./screens/Home.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Home />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
