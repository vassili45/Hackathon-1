import React, { useState } from "react";
import { Link } from "react-router-dom";

import Map from "@assets/mapSchool.jpg";

import personages from "@services/Personage";
import lieu from "@services/Lieu";

import "./LieuxStyle.css";

function Lieux(props) {
  const { handleCharacter, handleLocation } = props;
  const [grandeSalleIsShown, setGrandeSalleIsShown] = useState(false);

  const [dortoirIsShown, setDortoirIsShown] = useState(false);

  const [hutteIsShown, setHutteIsShown] = useState(false);

  const [potionIsShown, setPotionIsShown] = useState(false);

  const [metaIsShown, setMetaIsShown] = useState(false);

  const [defenseIsShown, setDefenseIsShown] = useState(false);

  const [foretIsShown, setForetIsShown] = useState(false);

  const [devIsShown, setDevIsShown] = useState(false);

  const [quidditchIsShown, setQuidditchIsShown] = useState(false);

  const [sauleIsShown, setSauleIsShown] = useState(false);

  return (
    <>
      <div className="backgroundMap" style={{ backgroundImage: `url(${Map})` }}>
        {" "}
      </div>
      <div className="map" style={{ backgroundImage: `url(${Map})` }}>
        <div className="GrandeSalle">
          <Link to="/Lieux/1">
            <input
              type="button"
              className="buttGrandeSalle"
              onMouseEnter={() => setGrandeSalleIsShown(true)}
              onMouseLeave={() => setGrandeSalleIsShown(false)}
              onClick={() => {
                handleCharacter(personages[0]);
                handleLocation(lieu[0]);
              }}
            />
          </Link>
          <span className={grandeSalleIsShown ? "isShown" : "isHidden"}>
            Grande Salle
          </span>
        </div>

        <div className="Dortoir">
          <Link to="/Lieux/2">
            <input
              type="button"
              className="buttDortoir"
              onMouseEnter={() => setDortoirIsShown(true)}
              onMouseLeave={() => setDortoirIsShown(false)}
              onClick={() => {
                handleCharacter(personages[4]);
                handleLocation(lieu[2]);
              }}
            />
          </Link>

          <span className={dortoirIsShown ? "isShown" : "isHidden"}>
            Dortoir
          </span>
        </div>

        <div className="Hutte">
          <Link to="/Lieux/3">
            <input
              type="button"
              className="buttHutte"
              onMouseEnter={() => setHutteIsShown(true)}
              onMouseLeave={() => setHutteIsShown(false)}
              onClick={() => {
                handleCharacter(personages[3]);
                handleLocation(lieu[1]);
              }}
            />
          </Link>
          <span className={hutteIsShown ? "isShown" : "isHidden"}>Hutte</span>
        </div>

        <div className="Potion">
          <Link to="/Lieux/4">
            <input
              type="button"
              className="buttPotion"
              onMouseEnter={() => setPotionIsShown(true)}
              onMouseLeave={() => setPotionIsShown(false)}
              onClick={() => {
                handleCharacter(personages[1]);
                handleLocation(lieu[4]);
              }}
            />
          </Link>
          <span className={potionIsShown ? "isShown" : "isHidden"}>
            Salle des Potions
          </span>
        </div>

        <div className="Meta">
          <Link to="/Lieux/5">
            <input
              type="button"
              className="buttMeta"
              onMouseEnter={() => setMetaIsShown(true)}
              onMouseLeave={() => setMetaIsShown(false)}
              onClick={() => {
                handleCharacter(personages[5]);
                handleLocation(lieu[5]);
              }}
            />
          </Link>
          <span className={metaIsShown ? "isShown" : "isHidden"}>
            Salle de Métamorphose
          </span>
        </div>

        <div className="Defense">
          <Link to="/Lieux/6">
            <input
              type="button"
              className="buttDefense"
              onMouseEnter={() => setDefenseIsShown(true)}
              onMouseLeave={() => setDefenseIsShown(false)}
              onClick={() => {
                handleCharacter(personages[2]);
                handleLocation(lieu[6]);
              }}
            />
          </Link>
          <p className={defenseIsShown ? "isShown" : "isHidden"}>
            Salle de Défense <br />
            contre les BDD
          </p>
        </div>

        <div className="Foret">
          <Link to="/Lieux/7">
            <input
              type="button"
              className="buttForet"
              onMouseEnter={() => setForetIsShown(true)}
              onMouseLeave={() => setForetIsShown(false)}
              onClick={() => {
                handleCharacter(personages[6]);
                handleLocation(lieu[7]);
              }}
            />
          </Link>
          <span className={foretIsShown ? "isShown" : "isHidden"}>
            Fôret Interdite
          </span>
        </div>

        <div className="Dev">
          <Link to="/Lieux/8">
            <input
              type="button"
              className="buttDev"
              onMouseEnter={() => setDevIsShown(true)}
              onMouseLeave={() => setDevIsShown(false)}
              onClick={() => {
                handleCharacter(personages[7]);
                handleLocation(lieu[8]);
              }}
            />
          </Link>
          <span className={devIsShown ? "isShown" : "isHidden"}>
            Dev au lard
          </span>
        </div>

        <div className="Quidditch">
          <Link to="/Lieux/9">
            <input
              type="button"
              className="buttQuidditch"
              onMouseEnter={() => setQuidditchIsShown(true)}
              onMouseLeave={() => setQuidditchIsShown(false)}
              onClick={() => {
                handleCharacter(personages[8]);
                handleLocation(lieu[9]);
              }}
            />
          </Link>
          <span className={quidditchIsShown ? "isShown" : "isHidden"}>
            Terrain de Quid Wars
          </span>
        </div>

        <div className="Saule">
          <Link to="/Lieux/10">
            <input
              type="button"
              className="buttSaule"
              onMouseEnter={() => setSauleIsShown(true)}
              onMouseLeave={() => setSauleIsShown(false)}
              onClick={() => {
                handleCharacter(personages[9]);
                handleLocation(lieu[10]);
              }}
            />
          </Link>
          <span className={sauleIsShown ? "isShown" : "isHidden"}>
            Saule Cogneur
          </span>
        </div>
      </div>
    </>
  );
}

export default Lieux;
