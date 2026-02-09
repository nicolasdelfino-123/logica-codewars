/* Ejercicio 5 — countGreaterThan
Contar cuántos números son mayores a N.

👉 Alternativa pro: filter.length */

/* const countGreaterThan = (arr, n) => {

    let counter = 0
    for (let num of arr) {
        if (num > n) {
            counter++
        }
    }
    return counter
} */
const countGreaterThan = (arr, n) => {

    let filtrados = arr.filter((ele) => ele > n)
    return filtrados.length
}

console.log(countGreaterThan([5, 10, 15, 20], 12)); // 2