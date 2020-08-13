/*Таски на условия
1) Делится ли число на 5, или на 3, или на 2 без остатка?*/

function isMultiplicity(number) {
    return (number % 5 === 0 || number % 3 === 0 || number % 2 === 0);
};
console.log(`Is this number a multiplicity by 5 or 3 or 2? ${isMultiplicity(5)}`);