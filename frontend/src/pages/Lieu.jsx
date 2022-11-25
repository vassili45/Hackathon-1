import React, { useState } from "react";
import { Link } from "react-router-dom";
// import lieu from "@services/Lieu";
// import personages from "@services/Personage";
// import Lieux from "./Lieux";

import "./Lieu.css";

function Lieu(props) {
  const [progress, setProgress] = useState(1);
  const { location, character } = props;

  return (
    <section
      className="lieu"
      style={{ backgroundImage: `url(${location.src})` }}
    >
      {progress === 1 && (
        <>
          <h2>{location.name}</h2>
          <p className="lieuDesc">
            <span>{location.description}</span>
          </p>
        </>
      )}

      {progress === 2 && (
        <>
          <div className="cardChars">
            <img alt="avatar" src={character.src} />
            <h3>{character.name}</h3>
          </div>
          <p className="text-center">{character.quote1}</p>
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
