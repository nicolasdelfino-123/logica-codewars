/* 📘 Día 2 — Ejercicio 4 (DEFINITIVO)
🟦 Nombre
insertAtEnd
🟩 Consigna profesional
Implementá una función insertAtEnd(array, element) que:
    1. Devuelva un nuevo array con element al final.
    2. No podés usar push().
    3. No se puede mutar el array original.
🟦 Console.log obligatorios
*/

// facilñ con spread sale
/* const insertAtEnd = (arr, ele) => {
    return [...arr, ele]
} */

// probando con for clasico SALIÓ
/* const insertAtEnd = (arr, ele) => {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }
    result.push(ele)
    return result
} */

// PROBANDO CONCAT salio

const insertAtEnd = (arr, ele) => {

    let result = [...arr].concat(ele)
    return result
}

console.log(insertAtEnd([1, 2], 3));
// → [1, 2, 3]

console.log(insertAtEnd([], "x"));
// → ["x"] 