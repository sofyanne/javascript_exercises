"use strict";

// 1. Réaliser un programme qui force la saisie du chiffre 3.

const readline = require("readline-sync");

const askNumber = () => {
  return parseInt(readline.question("Saisir le chiffre 3 : "));
};

const isNumber3 = (num) => {
  return num === 3;
};

const app = () => {
  let number;
  while (!isNumber3(number)) {
    number = askNumber();
    if(isNumber3(number)) {
        console.log("Bravo vous avez saisi le chiffre 3 !");
        return;
    }
  }
};

app();
