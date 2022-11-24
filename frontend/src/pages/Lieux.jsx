import React, { useState } from "react";

import Map from "@assets/mapSchool.jpg";

import "./LieuxStyle.css";

function Lieux() {
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
    <div className="map" style={{ backgroundImage: `url(${Map})` }}>
      <div className="GrandeSalle">
        <input
          type="button"
          className="buttGrandeSalle"
          onMouseEnter={() => setGrandeSalleIsShown(true)}
          onMouseLeave={() => setGrandeSalleIsShown(false)}
        />
        <span className={grandeSalleIsShown ? "isShown" : "isHidden"}>
          Grande Salle
        </span>
      </div>

      <div className="Dortoir">
        <input
          type="button"
          className="buttDortoir"
          onMouseEnter={() => setDortoirIsShown(true)}
          onMouseLeave={() => setDortoirIsShown(false)}
        />
        <span className={dortoirIsShown ? "isShown" : "isHidden"}>Dortoir</span>
      </div>

      <div className="Hutte">
        <input
          type="button"
          className="buttHutte"
          onMouseEnter={() => setHutteIsShown(true)}
          onMouseLeave={() => setHutteIsShown(false)}
        />
        <span className={hutteIsShown ? "isShown" : "isHidden"}>Hutte</span>
      </div>

      <div className="Potion">
        <input
          type="button"
          className="buttPotion"
          onMouseEnter={() => setPotionIsShown(true)}
          onMouseLeave={() => setPotionIsShown(false)}
        />
        <span className={potionIsShown ? "isShown" : "isHidden"}>
          Salle des Potions
        </span>
      </div>

      <div className="Meta">
        <input
          type="button"
          className="buttMeta"
          onMouseEnter={() => setMetaIsShown(true)}
          onMouseLeave={() => setMetaIsShown(false)}
        />
        <span className={metaIsShown ? "isShown" : "isHidden"}>
          Salle de Métamorphose
        </span>
      </div>

      <div className="Defense">
        <input
          type="button"
          className="buttDefense"
          onMouseEnter={() => setDefenseIsShown(true)}
          onMouseLeave={() => setDefenseIsShown(false)}
        />
        <p className={defenseIsShown ? "isShown" : "isHidden"}>
          Salle de Défense <br />
          contre les Forces du Mal
        </p>
      </div>

      <div className="Foret">
        <input
          type="button"
          className="buttForet"
          onMouseEnter={() => setForetIsShown(true)}
          onMouseLeave={() => setForetIsShown(false)}
        />
        <span className={foretIsShown ? "isShown" : "isHidden"}>
          Fôret Interdite
        </span>
      </div>

      <div className="Dev">
        <input
          type="button"
          className="buttDev"
          onMouseEnter={() => setDevIsShown(true)}
          onMouseLeave={() => setDevIsShown(false)}
        />
        <span className={devIsShown ? "isShown" : "isHidden"}>Dev au lard</span>
      </div>

      <div className="Quidditch">
        <input
          type="button"
          className="buttQuidditch"
          onMouseEnter={() => setQuidditchIsShown(true)}
          onMouseLeave={() => setQuidditchIsShown(false)}
        />
        <span className={quidditchIsShown ? "isShown" : "isHidden"}>
          Terrain de Quidditch
        </span>
      </div>

      <div className="Saule">
        <input
          type="button"
          className="buttSaule"
          onMouseEnter={() => setSauleIsShown(true)}
          onMouseLeave={() => setSauleIsShown(false)}
        />
        <span className={sauleIsShown ? "isShown" : "isHidden"}>
          Saule Cogneur
        </span>
      </div>
    </div>
  );
}

export default Lieux;
