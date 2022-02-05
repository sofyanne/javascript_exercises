"use strict";

//1. Afficher la table de multiplication à 10 d'un nombre entré par l'utilisateur.

const readline = require("readline-sync");

const askNumber = () => {
  let number = readline.questionInt(
    "Quelle table de multiplication voulez-vous afficher? "
  );
  return number;
};

const multiplyNumber = (num) => {
  let result = [];
  for (let i = 0; i <= 10; i++) {
    result.push(`${num} * ${i} = ${num * i}`);
  }

  return result;
};

const showArray = (arr) => {
  for (const element of arr) {
    console.log(element);
  }
};

const app = () => {
  let num = askNumber();
  let table = multiplyNumber(num);

  showArray(table);
};

app();
