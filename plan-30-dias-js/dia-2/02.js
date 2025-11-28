/* 📘 Día 2 — Ejercicio 2 (DEFINITIVO)
🟦 Nombre
customShift
🟩 Consigna profesional
Implementá una función customShift(array) que:
    1. Reciba un array.
    2. Devuelva un nuevo array sin el PRIMER elemento.
    3. No puede mutar el array original.
    4. No podés usar shift().
    5. Si el array está vacío, devolvé uno vacío.
🟦 Console.log obligatorios
*/

//solucion mia con for
/* const customShift = (arr) => {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            result.push(arr[i])
        }
    }
    return result
} */

// solucion mia con slice

/* const customShift = (arr) => {
    return arr.slice(1)
}
 */

// solcucion con entries gpt sin mirar

/* const customShift = (arr) => {

    let result = []
    for (let [index, value] of arr.entries()) {
        if (index > 0) {
            result.push(value)
        }
    }
    return result
} */


// solucion con reduce sin mirar

const customShift = (arr) => {
    return arr.reduce((acc, ele, index) => {
        if (index > 0) {
            acc.push(ele)
        }
        return acc
    }, [])
}


console.log(customShift([1, 2, 3]));
// → [2, 3]

console.log(customShift(["x", "y"]));
// → ["y"]

console.log(customShift([]));
// → [] 