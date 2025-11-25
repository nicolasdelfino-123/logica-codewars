/* 🟦 Ejercicio 1 — removeFirstElementImmutable
📌 Consigna
Implementá removeFirstElementImmutable(array) que:
    1. Reciba un array.
    2. Devuelva un array nuevo sin el primer elemento.
    3. No debe mutar el original.
    4. No podés usar shift().
🟩 Console.logs obligatorios
*/

function removeFirstElementImmutable(arr) {


    return arr.slice(1)
}




console.log(removeFirstElementImmutable([10, 20, 30]));
// → [20, 30]

console.log(removeFirstElementImmutable(["a", "b", "c"]));
// → ["b", "c"]

console.log(removeFirstElementImmutable([])); 