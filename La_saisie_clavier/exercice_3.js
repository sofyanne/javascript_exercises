"use strict";

const readline = require("readline-sync");

const calculPuissance = (power, number) => {
  return `2 à la puissance ${number} = ${power ** number}`;
};

const puissanceVoulue = () => {
  return readline.questionInt("Puissance voulue ? ");
};

const app = () => {
  const PUISSANCE = 2;
  let nombre = puissanceVoulue();
  console.log(calculPuissance(PUISSANCE, nombre));
};

app();