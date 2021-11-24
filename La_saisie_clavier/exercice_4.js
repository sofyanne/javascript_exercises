"use strict";

const readline = require("readline-sync");

const askIdentity = () => {
  let person = {};
  person.lastName = readline.question("Quel est votre nom ? ");
  person.firstName = readline.question("Quel est votre prénom ? ");
  person.age = readline.questionInt("Quel est votre age ? ");

  return person;
};

const showidentity = (person) => {
  let welcomeText = "BIENVENUE";
  let padStartedText = welcomeText.padStart(welcomeText.length + 10, "-");
  let padEndedText = padStartedText.padEnd(padStartedText.length + 10, "-");

  let resultSentence = `${padEndedText}
    Votre nom est : ${person.lastName.toUpperCase()}
    Votre prenom est : ${person.firstName}
    Vous avez ${person.age} ans`;

  return resultSentence;
};

const app = () => {
  let askedPerson = askIdentity();
  console.log(showidentity(askedPerson));
};

app();
