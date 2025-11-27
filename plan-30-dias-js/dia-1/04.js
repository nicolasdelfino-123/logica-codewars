/* 🟦 Ejercicio 4 — getElementsAfter
📌 Consigna
Implementá getElementsAfter(array, n) que:
    1. Devuelva todos los elementos después de n.
    2. No muta el array original.
    3. Si n >= length, devolver [].
    4. Si n < 0, tomar como 0.
    5. No usar splice().
🟩 Console.logs obligatorios
 */

// verison mia

/* const getElementsAfter = (array, n) => {
    if (n >= array.length) {
        return []
    } else if (n < 0) n = 0
    return array.slice(n + 1)
} */

// VERSION PRO GPT PERO REESCRITA SIN MIRAR

const getElementsAfter = (array, n) => {

    let normalized = Math.max(0, n)
    return n >= array.length ? [] : array.slice(normalized + 1)
}

console.log(getElementsAfter(['a', 'b', 'c', 'd'], 2));
// → ['d']

console.log(getElementsAfter([10, 20, 30], 0));
// → [20, 30]

console.log(getElementsAfter([1, 2, 3], 10));
// → []

console.log(getElementsAfter(['x', 'y', 'z'], -5));
// → ['y','z']