/* 📘 DÍA 1 — Dominio TOTAL de bucles + arrays
Ejercicio 1 — sumAll
Sumar todos los números de un array.

👉 Alternativa pro: reduce */


/* 
const sumAll = (arr) => {

    let total = 0
    for (num of arr) {
        total += num
    }
    return total
} */

const sumAll = (arr) => {

    return arr.reduce((acc, ele) => {
        return acc + ele
    }, 0)
}


console.log(sumAll([1, 2, 3, 4])); // 10
console.log(sumAll([]));        // 0