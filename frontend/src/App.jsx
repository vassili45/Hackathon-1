import logo from "@assets/Logo.png";
import Lieu from "@pages/Lieu";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <Home />
      <Lieu />
    </div>
  );
}

export default App;
