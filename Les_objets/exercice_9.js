"use strict";

// 1. A partir de l'objet suivant, réaliser l'affichage.

let voiture = {
  immatriculation: "TT-567-LM",
  marque: "Toyota",
  annee: 2017,
};

const displayObject = (data) => {
  if (
    data.immatriculation !== undefined &&
    data.marque !== undefined &&
    data.annee !== undefined
  ) {
    console.log(
      `La voiture d'immatriculation ${data.immatriculation}, de marque ${data.marque}, date de ${data.annee}.`
    );
    return;
  }

  console.log("L'objet fourni doit contenir les 3 propriétés suivantes (immatriculation, marque, année).")

};


const app = () => {
  displayObject(voiture);
  return;  
};

app();