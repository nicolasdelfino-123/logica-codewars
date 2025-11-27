/* 📌 Consigna
Implementá replaceMiddleImmutable(array, index, newValue) que:
    1. Reemplaza el elemento en index por newValue.
    2. No muta el original.
    3. Si el índice no existe, devolver el array original.
    4. No usar splice() destructivo.
🟩 Console.logs obligatorios
*/

// ESTO HICE YO SOLO
/* const replaceMiddleImmutable = (array, index, newValue) => {

    if (index < 0 || index > array.length) {
        return array
    }
    let result = []
    let indice = 0
    for (let valor of array) {
        if (indice < index) {
            result.push(valor)

        }
        indice++
    }

    let resto = array.slice(index + 1)

    result = [...result, newValue, ...resto]

    return result

} */

// VERSION GPT SIN MIRAR

const replaceMiddleImmutable = (array, index, newValue) => {
    if (index < 0 || index >= array.length) return array

    let result = [
        ...array.slice(0, index),
        newValue,
        ...array.slice(index + 1)
    ]
    return result
}



console.log(replaceMiddleImmutable([10, 20, 30, 40], 2, 999));
// → [10,20,999,40]

console.log(replaceMiddleImmutable(['a', 'b', 'c'], 0, 'Z'));
// → ['Z','b','c']

console.log(replaceMiddleImmutable([1, 2, 3], 10, 99));
// → [1,2,3] 