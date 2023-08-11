import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Test from "./screens/Test";
const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/Home"} element={<Home />} />
      <Route path={"/test"} element={<Test />} />
    </Routes>
  );
};

export default App;
