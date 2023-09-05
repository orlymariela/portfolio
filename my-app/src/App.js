import React from "react";
import {BrowserRouter} from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
    </BrowserRouter> 
    
  );
}

export default App;
