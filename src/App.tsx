import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Pages from "./Pages/Pages";
import Header from "./Component/Header";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
