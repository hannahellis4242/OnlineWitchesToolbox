import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router";

const App = () => (
  <Routes>
    <Route path="/">
      <Home />
    </Route>
  </Routes>
);

export default App;
