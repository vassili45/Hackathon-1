import img from "../assets/logo.png"
import "./Home.css"

export default function Home() {
  return (
    <div className="mainHomeDiv d-flex flex-column justify-content-center p-0 m-0">
      <div className="HomeText text-center w-75 align-self-center">
        <p className="fw-bold">Bienvenue apprenti sorcier.</p>
        <p className="fw-bold">Ici commence ton aventure à travers la découverte de la Wizard Code School.</p>
      </div>
      <button className="HomeButton align-self-end fw-bold" type="button">Continuer</button>
    </div>
  );
}
