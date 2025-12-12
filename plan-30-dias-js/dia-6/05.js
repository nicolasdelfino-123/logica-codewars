/* 🟦 Ejercicio 5 — getLastTwo
Devolver los últimos dos elementos de un array sin mutarlo.
*/

const getLastTwo = (arr) => {
    return arr.slice(-2)
}

console.log(getLastTwo([1, 2, 3, 4]));
// → [3,4] 