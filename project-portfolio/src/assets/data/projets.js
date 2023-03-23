import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projets = [
  {
    id: uuidv4(),
    name: 'Portfolio',
    desc:
      'Vous ête actuellement sur ce projet que j`ai effectué avec React, Nodejs, bootstrap, UIMaterials.... ',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Site d`une association de Montpellier',
    desc:
      'Le site web de l`association"Le nouveau Monde Montpellier".',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'UMatch',
    desc:
      'Un site de macthing de personne celon leur prenom, site réaliser en JavaScript',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Curiculum Vitae",
    desc:
      'J`ai fait un CV en WordPress en utilisant ............................ ',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Interface Utilisateur',
    desc:
      'J`ai réalisé une interface graphique pour le site de LABSud un fablab de Montpellier,' +
      'pour ce faire j`ai utilisé le modèle MVC et les langages PHP, Curl, API rest.. pour le styles Bootstrap et le CSS3..',
    img: ProjectImg,
  },
];

export default projets;
