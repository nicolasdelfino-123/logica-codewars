/* 📘 Día 2 — Ejercicio 5 (DEFINITIVO)
🟦 Nombre
sumWithAccumulator
🟩 Consigna profesional
Implementá una función sumWithAccumulator(array) que:
    1. Reciba un array de números.
    2. Use un acumulador manual (no reduce) para calcular la suma total.
    3. Agregue cada número acumulado a un nuevo array mediante push().
    4. Devuelva un objeto con:
        ◦ total: la suma final
        ◦ partialSums: el array con cada paso de acumulación
    5. Si el array está vacío, total debe ser 0 y partialSums debe ser [].
Ejemplo conceptual:
Para [2, 5, 3] → partialSums debe ser [2, 7, 10].
🟦 Console.log obligatorios
*/

// version mia
/* const sumWithAccumulator = (arr) => {
    let obj = { total: 0, partialSums: [] }
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            obj.total += arr[i]
            obj.partialSums.push(arr[i])
        } if (i > 0) {
            obj.total += arr[i]
            obj.partialSums.push(obj.total)
        }


    }
    return obj

} */

/* version gpt */
const sumWithAccumulator = (arr) => {
    let obj = { total: 0, partialSums: [] }

    for (let i = 0; i < arr.length; i++) {
        obj.total += arr[i]           // sumo lo actual al total
        obj.partialSums.push(obj.total) // guardo el total acumulado
    }

    return obj
}


console.log(sumWithAccumulator([2, 5, 3]));
// → { total: 10, partialSums: [2, 7, 10] }

console.log(sumWithAccumulator([]));
// → { total: 0, partialSums: [] } 