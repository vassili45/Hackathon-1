import Home from "./pages/Home";
import { Router, Routes, Route, Link } from "react-router-dom";

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

