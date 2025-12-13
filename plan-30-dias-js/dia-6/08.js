/* 🟦 Ejercicio 8 — averageLength
Promedio de longitudes de strings en un array.

 */

const averageLength = (arr) => {

    let result = 0
    let longitud = arr.length
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result++
        }
    }
    return result / longitud
}



console.log(averageLength(["hola", "js"]));
// → 3