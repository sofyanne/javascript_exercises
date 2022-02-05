"use strict";

// 1. Réalisez un programme qui additionne les 10 premiers chiffres et qui affiche le cumul à chaque étape.


const app = () => {
    let result = 0;
    let add = 1;
    for (let i = 0; i < 10; i++) {
        console.log(`Etape ${i + 1} : ${result = result + add}`);
        add++;
    }
};

app();