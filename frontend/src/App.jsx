import logo from "@assets/logo.png";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "@pages/Home";
import Lieux from "@pages/Lieux";
import Lieu from "@pages/Lieu";

import "./App.css";

function App() {
  const [location, setLocation] = useState({});
  const [character, setCharacter] = useState({});
  const handleLocation = (e) => {
    setLocation(e);
  };
  const handleCharacter = (e) => {
    setCharacter(e);
  };
  return (
    <Router>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Lieux"
            element={
              <Lieux
                handleLocation={handleLocation}
                handleCharacter={handleCharacter}
              />
            }
          />
          <Route
            path="/Lieux/:id"
            element={<Lieu location={location} character={character} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
