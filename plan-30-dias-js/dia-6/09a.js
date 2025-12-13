/* 🟦 Ejercicio — buildStatsObject

Dado un array de strings, construir un objeto donde:
- cada string sea una clave
- el valor sea la cantidad de veces que aparece

Reglas:
- no usar map / reduce / filter
- usar for clásico o for...of
- las claves salen del array (dinámicas)
*/


function buildStatsObject(arr) {

    let result = {}
    for (let str of arr) {
        if (result[str] === undefined) {
            result[str] = 1
        } else {
            result[str]++
        }
    }
    return result
}






console.log(buildStatsObject(["js", "js", "python", "js", "react"]))
// → { js: 3, python: 1, react: 1 }

console.log(buildStatsObject(["a", "b", "a"]))
// → { a: 2, b: 1 }
