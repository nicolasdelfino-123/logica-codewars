/* Ejercicio 2 — doubleValues
Duplicar cada número.

👉 Alternativa pro: map */

/* function doubleValues(arr) {
    return arr.map((num) => num + num)
}
 */

function doubleValues(arr) {
    let result = []

    for (let num of arr) {
        result.push(num * 2)
    }
    return result
}

console.log(doubleValues([1, 2, 3])); // [2,4,6]