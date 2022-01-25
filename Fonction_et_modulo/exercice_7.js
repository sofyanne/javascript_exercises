"use strict";
// 1. Réaliser une fonction qui nous permet de savoir si un nombre est divisible par 3.

const readline = require("readline-sync");

const isSplitableBy3 = (num, result) => {
    result = num % 3;
  let display;
  result == 0
    ? (display = `Le nombre ${num} est divisible par 3`)
    : (display = `Le nombre ${num} n'est pas divisible par 3`);
  return display;
};

const divide = (num) => {
  return num / 3;
};

const askNumber = () => {
  let number;
  while (isNaN(number)) {
    number = readline.questionInt(
      "Quelle nombre souhaitez vous diviser par 3? "
    );
  }
  return number;
};

const app = () => {
  let number = askNumber();
  let result = divide(number);
  console.log(`${number} / 3 = ${result}`);
  console.log(isSplitableBy3(number, result));
};

app();
