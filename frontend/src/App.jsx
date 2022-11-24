import logo from "@assets/Logo.png";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <Home />
    </div>
  );
}

export default App;
