"use strict";

//1. Demandez à l'utilisateur de saisir un nombre.
//2. Si la saisie n'est pas de type number, le programme propose de saisir de nouveau un nombre.

const readline = require("readline-sync");

const askNumber = () => {
  const number = parseInt(readline.question("Saisissez un nombre : "));

  return number;
};

const app = () => {
  let number;
  while (!number.isSafeInteger) number = askNumber();
};

app();
