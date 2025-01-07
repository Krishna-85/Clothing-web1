import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  return (
    <div className="w-screen h-screen flex   ">
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
     </Routes>
     
        
    </div>
  );
}

export default App;
