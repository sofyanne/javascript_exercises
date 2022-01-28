"use strict";

// 1. A partir de l'objet personnage suivant, permettre la saisie du nom est de l'age.

const readline = require("readline-sync");

let personnage = {};

const askValidProperties = () => {

  while (true){
    const nom = readline.question("Quel est le nom ?");
    const age = parseInt(readline.question("Quel est l'age ?"));

    if (nom.trim().length > 1 && !isNaN(age)) {
      return personnage = {
        nom: nom,
        age: age
      };
    }
  } 
};

console.log(askValidProperties());
