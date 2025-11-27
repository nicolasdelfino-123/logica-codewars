/* 🟦 Ejercicio 2 — insertAtBeginningImmutable
📌 Consigna
Implementá insertAtBeginningImmutable(array, element) que:
    1. Devuelva un nuevo array con element al inicio.
    2. No muta el array original.
    3. No podés usar unshift().
🟩 Console.logs obligatorios
*/

// VERSION 1 MIA

/* const insertAtBeginningImmutable = (array, element) => {

    let result = [element].concat(array)
    return result


} */

// VERSION 2 MIA

/* const insertAtBeginningImmutable = (array, element) => {

let arrayNuevo = [...array]
arrayNuevo.splice(0, 0, element) // DESDE EL indice 0, no borres nada ( otro cero) inserta element
return arrayNuevo

} */

// VERSION PRO GPT

/* const insertAtBeginningImmutable = (array, element) => [element, ...array] */





console.log(insertAtBeginningImmutable([2, 3, 4], 1));
// → [1, 2, 3, 4]

console.log(insertAtBeginningImmutable([], 99));
// → [99] 