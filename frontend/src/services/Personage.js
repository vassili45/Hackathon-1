import albusGorski from "@assets/Personnages/Albus_Gorski.png";
import rogueRichard from "@assets/Personnages/Rogue_Richard.png";
import jFLupin from "@assets/Personnages/JF_Lupin.png";
import benoitGrid from "@assets/Personnages/Benoit_Grid.png";
import kevinPrefet from "@assets/Personnages/Kevin_Prefet.png";
import louAnneMcGonnagal from "@assets/Personnages/Lou-Anne_McGonagall.png";

const personages = [
  {
    personage_id: 1,
    name: "Albus Gorski",
    src: albusGorski,
    quote1:
      "Salut les BG! Vous êtres prêts pour devenir un aussi bon magicien du web que moi?",
  },
  {
    personage_id: 2,
    name: "Rogue Richard",
    src: rogueRichard,
    quote1:
      "Vous ne savez vraiment pas utilisez vos API. Décevant... Essayez plutôt Axios API la prochaine fois comme sortilège!",
  },
  {
    personage_id: 3,
    name: "J-F Lupin",
    src: jFLupin,
    quote1:
      "Pour combattre les bases de données, il vous faudra un sortilège puissant! Le sortie du Phptronus. Repetez après moi : Expecto Phptronum.",
  },
  {
    personage_id: 4,
    name: benoitGrid,
    src: "./assets/Benoit_Grid.png",
    quote1:
      "Grosso modo, il faut arriver à dompter le grid pour votre futur deweb-sorcier / web-developper / developper-sorcier.",
  },
  {
    personage_id: 5,
    name: "Kévin Prefet",
    src: kevinPrefet,
    quote1: "Le mot de passe est Caput Devonis!",
  },
  {
    personage_id: 6,
    name: "Lou-Anne McGonnagal",
    src: louAnneMcGonnagal,
    quote1:
      "Aujourd’hui, nous allons apprendre la métamorphosedes interfaces graphiques!",
  },
];

export default personages;
