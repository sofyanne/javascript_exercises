"use strict";

// 1. Réaliser la factorielle d'un nombre n.

const readline = require("readline-sync");


const factorielleRecursive = (n) => {
    
    if (n === 0) {
        return 1;
    }
    return n * factorielle(n - 1);
};

const factorielle = (n) => {
    let result = 1;

    for(let i = 1; i <= n; i++) {
        result*=i;
        console.log(`Etape ${i} : Result : ${result}`);
    }
    return;
};

const askNumber = () => {
    const number = parseInt(readline.question("Factorielle de : "));
    return number;

};


const app = () => {
    const nombre = askNumber();
    factorielle(nombre);
};

app();