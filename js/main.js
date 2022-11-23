// objectif :
// écrire une fonction qui crée une section qui contiendra une balise h1 et une balise p

// on va créer 3 fonctions : 1 section, 1 h1, 1 pour p

const myBody = document.querySelector('body');

const heroSection = section('Hero section', 'Sous-titre de la section Hero');
const secondSection = section('Second section', 'Sous-titre de la second section');

myBody.appendChild(heroSection);
myBody.appendChild(secondSection);