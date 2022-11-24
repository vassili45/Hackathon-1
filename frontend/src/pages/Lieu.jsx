import React, { useState } from "react";
import lieu from "@services/Lieu";

import "./Lieu.css";

function Lieu() {
  const [currentLocation, setCurrentLocation] = useState(0);
  const handleClick = () => {
    setCurrentLocation(currentLocation + 1);
  };

  return (
    <section
      className="lieu"
      style={{ backgroundImage: `url(${lieu[currentLocation].src})` }}
    >
      <h2>{lieu[currentLocation].name}</h2>
      <p>
        <span>{lieu[currentLocation].description}</span>
      </p>
      <button type="button" onClick={handleClick}>
        Continuer
      </button>
    </section>
  );
}

export default Lieu;
