import React from "react";

import "./App.css";
import Pages from "./Pages/Pages";
import { BrowserRouter, } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
