import logo from "@assets/logo.png";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Lieux from "@pages/Lieux";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <img src={logo} alt="logo" className="logo" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Lieux" element={<Lieux />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
