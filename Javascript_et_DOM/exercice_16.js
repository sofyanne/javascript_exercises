"use strict";

// Réaliser un programme qui choisit un nombre aléatoi entre 1 et 20
//             On affiche :
//                         Petit si < 7
//                         Moyen entre 7 et 15
//                         Grand > à 15 -->

const generateNumber = () => {
  const num = Math.floor(Math.random() * 20);
  return num;
};

const testNumber = (num) => {
  if (num < 7) {
    return `${num} 
Petit`;
  }
  if (num > 7 && num < 15) {
    return `${num} 
Moyen`;
  }
  return `${num} 
Grand`;
};

const app = () => {
  const num = generateNumber();
  const result = testNumber(num);
  console.log(result);
};

app();
