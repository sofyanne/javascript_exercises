// 1. Réaliser une fonction qui vérifie si un mot passé en paramètre contient au moins 8 caractères.

const haveMostOf8char = (word) => {
    let result;
    if (word.trim().length < 8) {
        result = `Le mot contient ${word.trim().length} caractères.`;
        return result;
    }

    result = "Le mot fait plus de 8 caractères.";

    return result;

};

const app = () => {
    console.log(haveMostOf8char("Hellopppp"));
};

app();