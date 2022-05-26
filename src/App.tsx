import React,{useContext} from "react";
//import logo from './logo.svg';
import "./App.css";
import Pages from "./Pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";

import Wrapper,{Context} from "./Component/Wrapper";

function App(props:any) {
 const context = useContext(Context);
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
