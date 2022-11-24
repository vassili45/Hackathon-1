import React, { useState } from "react";
import { Link } from "react-router-dom";
import lieu from "@services/Lieu";
import personages from "@services/Personage";
// import Lieux from "./Lieux";

import "./Lieu.css";

function Lieu() {
  const [progress, setProgress] = useState(1);

  return (
    <section
      className="lieu"
      style={{ backgroundImage: `url(${lieu[0].src})` }}
    >
      {progress === 1 && (
        <>
          <h2>{lieu[0].name}</h2>
          <p>
            <span>{lieu[0].description}</span>
          </p>
        </>
      )}
      {progress === 2 && (
        <>
          <div className="cardChars">
            <img alt="avatar" src={personages[0].src} width="400px" />
            <h3>{personages[0].name}</h3>
          </div>
          <p className="text-center">{personages[0].quote1}</p>
        </>
      )}

      {progress === 2 ? (
        <button type="button">
          {" "}
          <Link to="/Lieux">Retour</Link>
        </button>
      ) : (
        <button type="button" onClick={() => setProgress(progress + 1)}>
          Continuer
        </button>
      )}
    </section>
  );
}

export default Lieu;
