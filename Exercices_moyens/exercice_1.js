"use strict";

// 1. Créer un programme permettant de compléter un tableau de chiffres.
// le chiffre doit s'inserer directement à la bonne place (tableau trié).
// Réaliser un menu permettant l'ajout de plusieurs valeurs.

const readline = require("readline-sync");

const showInfo = (info) => {
  console.log(info);
};

const askChoice = () => {
  let choice = parseInt(readline.question("Quel est votre choix ?\n"));

  return choice;
};

const insertNumberInArray = (number, array) => {
    array.push(number);
    array.sort((a, b) => a - b)
};

const app = () => {
  const tab = [3, 5, 10, 12];
  const menu = "1/ Ajouter un chiffre\n2/ Afficher le tableau\n0/ Quitter";

  showInfo(`${tab}\n${menu}`);
  let choice = askChoice();

  while (choice !== 0) {
    if (choice === 1) {
        let number = parseInt(readline.question("Quel chiffre voulez-vous ajouter ?\n"));
        insertNumberInArray(number, tab);
    }
    if (choice === 2) {
        showInfo(tab);
    }
    showInfo(menu);
    choice = askChoice();
  }

  showInfo("Vous quittez le programme !\n");
};

app();
