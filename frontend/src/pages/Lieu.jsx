import React from "react";
import lieu from "@services/Lieu";

import "./Lieu.css";

function Lieu() {
  const handleClick = () => {};

  return (
    <section
      className="lieu"
      style={{ backgroundImage: `url(${lieu[0].src})` }}
    >
      <h2>{lieu[0].name}</h2>
      <p>
        <span>{lieu[0].description}</span>
      </p>
      <button type="button" onClick={handleClick}>
        Continuer
      </button>
    </section>
  );
}

export default Lieu;
