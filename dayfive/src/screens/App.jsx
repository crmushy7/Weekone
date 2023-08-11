import React from "react";
import { Route, Routes } from "react-router-dom";
import DivCreator from "../components/DivCreator";
import NewBlog from "./NewBlog";
import Trial from "./Trial";
import Update from "./Update";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<DivCreator />} />
      <Route path={"/NewBlog"} element={<NewBlog />} />
      <Route path={"/update/:id"} element={<Update />} />
    </Routes>
  );
};

export default App;
