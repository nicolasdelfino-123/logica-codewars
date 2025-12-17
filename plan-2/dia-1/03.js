/* Ejercicio 3 — filterOdds
Quedarse solo con los impares.

👉 Alternativa pro: filter */

const filterOdds = arr => arr.filter(num => num % 2 !== 0)


console.log(filterOdds([1, 2, 3, 4, 5])); // [1,3,5]