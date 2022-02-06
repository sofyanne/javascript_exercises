"use strict";


// 1. Réaliser un programme qui additionne les valeurs d'un tableau si celles-ci sont paires.

const calcArray = (values) => {
    let result = 0;
    for(let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
            result += values[i];
            console.log(`Itération : ${i} : ${result}`);
        } else {
            console.log(`Itération : ${i} : Non paire`);
        }
    }
    console.log(`Le total est de : ${result}`);
};


const app = () => {
    const tab = [2, 6, 10, 3, 8, 7, 20];

    calcArray(tab);
};

app();