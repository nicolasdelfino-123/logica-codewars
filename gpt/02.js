/* 🔥 EJERCICIO 2 — Contar números mayores

Conceptos: arrays numéricos, comparación, acumulación.

❗Consigna

Crear la función countGreaterThan(arr, limit) que devuelva cuántos elementos del array son mayores al número limit.

🧪 Tests
console.log(countGreaterThan([10, 5, 20, 3, 50], 10));
// 2

console.log(countGreaterThan([1, 2, 3], 0));
// 3 */

const countGreaterThan = (arr, limit) => {

    return arr.filter((ele) => ele > limit).length

}



console.log(countGreaterThan([10, 5, 20, 3, 50], 10));
// 2

console.log(countGreaterThan([1, 2, 3], 0));
// 3 */