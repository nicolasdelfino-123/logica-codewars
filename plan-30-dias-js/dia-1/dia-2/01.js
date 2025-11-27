/* 📘 Día 2 — Ejercicio 1 (DEFINITIVO)
🟦 Nombre
customPop
🟩 Consigna profesional
Implementá una función customPop(array) que:
    1. Reciba un array de cualquier tipo.
    2. Devuelva un nuevo array idéntico al original pero sin el ÚLTIMO elemento.
    3. No debe mutar el array original.
    4. No podés usar pop().
    5. Si el array está vacío, devolvé un array vacío.
🟦 Console.log obligatorios

⭐ Forma más pro (cuando termines)
Intentá resolverlo también usando slice() y usando length - 1 como límite. */

// resolución mia
/* const customPop = (arr) => {
    let result = []
    let indice = 0

    for (let valor of arr) {
        if (indice !== arr.length - 1) {
            result.push(valor)
        }
        indice++
    }
    return result
}
 */
// resolcuión mia con slice
const customPop = (arr) => {

    return arr.slice(0, - 1)
}

//resolcuion mia con filter
/* const customPop = (arr) => {

    return arr.filter((ele, index) => index !== arr.length - 1)
} */

console.log(customPop([10, 20, 30]));
// → [10, 20]

console.log(customPop(["a"]));
// → []

console.log(customPop([]));
// → []