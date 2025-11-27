/* 📘 Día 2 — Ejercicio 3 (DEFINITIVO)
🟦 Nombre
insertAtStart
🟩 Consigna profesional
Implementá una función insertAtStart(array, element) que:
    1. Devuelva un nuevo array con element al inicio.
    2. No se puede usar unshift().
    3. No se puede mutar el array original.
    4. Debe funcionar con cualquier tipo de dato.
🟦 Console.log obligatorios

⭐ Forma más pro
Resolverlo también con spread operator:
[element, ...array]. */


// no salió, corregir
const insertAtStart = (arr, ele) => {

    let result = []
    result.push(ele)
    for (let [indice, valor] of arr.entries()) {
        result.push(valor)

    }
    return result
}

// salió al toque
/* const insertAtStart = (arr, ele) => {
    return [ele, ...arr]

} */

// no salió, corregido es la misma logica del spread se inserta antes del bucle el elemento
/* const insertAtStart = (arr, ele) => {

    let result = []
    result.push(ele)
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])

    }
    return result
} */

// salió solo
/* const insertAtStart = (arr, ele) => {

    let result = [ele].concat(arr)
    return result
} */

console.log(insertAtStart([2, 3], 1));
// → [1, 2, 3]

console.log(insertAtStart([], 99));
// → [99]