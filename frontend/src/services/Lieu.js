import imgGrandeSalle from "@assets/Lieux/grand_hall.jpg";
import imgHutte from "@assets/Lieux/Hagrids-home.jpg";
import imgDortoir from "@assets/Lieux/gryfondor_dormitory.jpg";
import imgTrain from "@assets/Lieux/Poudlard_Express.jpg";
import imgSallePotion from "@assets/Lieux/salle_des_potions.jpg";
import imgMetamorphose from "@assets/Lieux/grand_hall.jpg";
import imgDefenseMal from "@assets/Lieux/grand_hall.jpg";
import imgForet from "@assets/Lieux/foret.jpg";
import imgDevAuLard from "@assets/Lieux/dev_au_lard.jpg";
import imgQuidditch from "@assets/Lieux/quidditch.png";
import imgSaule from "@assets/Lieux/saule.jpg";

const lieu = [
  {
    lieu_id: 1,
    name: "Grand salle",
    src: imgGrandeSalle,
    description:
      "La Grande Salle est la principale pièce commune de l'école. Les étudiants y mangent leurs repas et y reçoivent leurs hiboux quotidiens. De nombreux événements s'y déroulent tout au long de l'année.",
  },
  {
    lieu_id: 2,
    name: "Hutte de Benoîgrid",
    src: imgHutte,
    description:
      "La cabane de Benoîgrid est une maison forestière qui sert de lieu d'habitation pour Benoîgrid.",
  },
  {
    lieu_id: 3,
    name: "Dortoir",
    src: imgDortoir,
    description:
      "Un dortoir est un espace partagé entre élèves de la même maison, de la même année de Wizard Code School et du même sexe. Les dortoirs des filles et des garçons sont accessibles par la salle commune.",
  },
  {
    lieu_id: 4,
    name: "Wild Express",
    src: imgTrain,
    description:
      "Le Wizard Code School Express est un train qui effectue un trajet entre le Remote et Dev-au-Lard. Il est utilisé par les élèves et plus rarement par les professeurs de l'école de sorcellerie Wizard Code School.",
  },
  {
    lieu_id: 5,
    name: "salle de potions",
    src: imgSallePotion,
    description:
      "Le cours de potions est l'enseignement de la préparation des potions, des élixirs et d'autres breuvages magiques.",
  },
  {
    lieu_id: 6,
    name: "salle de métamorphose",
    src: imgMetamorphose,
    description:
      "La classe de métamorphose est le lieu où la métamorphose est enseignée aux élèves de Wizard Code School.",
  },
  {
    lieu_id: 7,
    name: "Salle de défense contre les forces du mal",
    src: imgDefenseMal,
    description:
      "La classe de défense contre les forces du Mal est le lieu où cette matière est enseignée aux élèves de Wizard Code School.",
  },
  {
    lieu_id: 8,
    name: "Forêt interdit",
    src: imgForet,
    description:
      "La Forêt interdite est une immense forêt bordant l'intérieur de l'enceinte du château Wizard Code School. Comme son nom l'indique, il est interdit aux élèves de l'école de pénétrer à l'intérieur - excepté dans le cadre de punitions ou bien encore des cours de soins aux créatures magiques. Au vu du nombre impressionnant de créatures s'étant établies dans cette forêt, il semble évident que peu d'élèves souhaiteraient s'y aventurer.",
  },
  {
    lieu_id: 9,
    name: "Dev au lard",
    src: imgDevAuLard,
    description:
      "Dev-au-Lard à n'avoir que des sorciers pour habitants. Ce village est le terminus du Wizard Code School Express et regroupe certains lieux connus dans le monde entier, notamment la Cabane hurlante.",
  },
  {
    lieu_id: 10,
    name: "quidditch",
    src: imgQuidditch,
    description:
      "Le Quidditch est un célèbre sport du monde des sorciers et également l'un de leurs sports favoris. Il s'agit d'un jeu sur balai, vieux de mille ans et qui consiste en l'opposition de deux équipes de sept joueurs, chacun ayant son rôle à jouer. Les vainqueurs d'un match sont ceux ayant le plus de points à la fin d'une partie.",
  },
  {
    lieu_id: 11,
    name: "Saule cogneur",
    src: imgSaule,
    description:
      "Le Saule cogneur (  Angl.  Whomping Willow ) est un arbre magique. Ce saule, très capricieux, a tendance à frapper avec ses longues branches les êtres vivants, humains ou créatures, s'approchant trop près de lui.",
  },
];

export default lieu;
