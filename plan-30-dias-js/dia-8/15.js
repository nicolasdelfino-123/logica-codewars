/* 🟦 Ejercicio 5 — makeNegative
Convertir un número en negativo siempre.
 */


const makeNegative = (num) => {
    return num > 0 ? -num : num;
}




console.log(makeNegative(5));
// → -5

console.log(makeNegative(-2));
// → -2