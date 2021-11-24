"use strict";
// 1. Afficher des variable.

const showText = (p) => {
  let result = `
    Nom : ${p.nom}
    Age : ${p.age}
    Sexe: ${p.homme ? "homme" : "femme"}`;
  return result;
};

const app = () => {
  const person = {
    nom: "toto",
    age: 30,
    homme: true,
  };

  console.log(showText(person));
};

app();
