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
import imgSaule from "@assets/saule.jpg";

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
    name: "Salle des Potions",
    src: imgSallePotion,
    description:
      "Le cours de potions est l'enseignement de la préparation des potions, des élixirs et d'autres breuvages magiques.",
  },
  {
    lieu_id: 6,
    name: "Salle de métamorphose",
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
    name: "Forêt interdite",
    src: imgForet,
    description:
      "La forêt interdite est un lieu néfaste et dangereux. De nombreux bugs se sont perdus dans celle-ci et il ne serait peut-être pas judicieux d'aller à leur rencontre.",
  },
  {
    lieu_id: 9,
    name: "Dev au lard",
    src: imgDevAuLard,
    description:
      "Dev-au-Lard est le seul village à n'avoir que des sorciers pour habitants. Ce village est le terminus du Wizard Code School Express et regroupe certains lieux connus dans le monde entier, notamment la Cabane hurlante.",
  },
  {
    lieu_id: 10,
    name: "Kata",
    src: imgQuidditch,
    description:
      "Les Kata sont le sport favori du monde des sorciers. Pratiqué au sein de l'école sur le terrain de Quid Wars, il s'agit d'un jeu sur balai, où le but est d'arriver à attraper la fonction, tout en évitant les loopards.",
  },
  {
    lieu_id: 11,
    name: "Saule cogneur",
    src: imgSaule,
    description:
      "Le Saule cogneur est un arbre magique. Ce saule, très capricieux, a tendance à frapper avec ses longues branches les êtres vivants, humains ou créatures, s'approchant trop près de lui.",
  },
];

export default lieu;
