import { Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Lieu from "./pages/Lieu";
import Lieux from "./pages/Lieux";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lieux" element={<Lieux />} />
          <Route path="/lieux/:id" element={<Lieu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
