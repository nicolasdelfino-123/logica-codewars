/* 🟦 Ejercicio 7 — replaceByCondition
Reemplazar valores en un array:
si un número es mayor a 10 → reemplazar por "BIG" (sin mutar).

 */

/* function replaceByCondition(arr) {

    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            result.push("BIG")
        } else {
            result.push(arr[i])
        }
    }
    return result
}
 */

function replaceByCondition(arr) {
    return arr.map(x => x > 10 ? "BIG" : x)
}



console.log(replaceByCondition([5, 12, 3, 20]));
// → [5,"BIG",3,"BIG"]