"use strict";
// 1. Inverser des variables.

const displayText = (numA, numB, text) => {
  let textFinal = text.padStart(text.length + 5, "-");
  let result = `${textFinal.padEnd(textFinal.length + 5, "-")}
A : ${numA}
B : ${numB}`;
  return result;
};

const reverseNumber = (numA, numB) => {
  let numC = numA;
  numA = numB;
  numB = numC;

  return [numA, numB];
};

const app = () => {
  let A = 1;
  let B = 5;

  let avantInversion = "Avant Inversion";
  let apresInversion = "Après Inversion";

  console.log(displayText(A, B, avantInversion));
  [A, B] = [...reverseNumber(A, B)];
  console.log(displayText(A, B, apresInversion));
};

app();
