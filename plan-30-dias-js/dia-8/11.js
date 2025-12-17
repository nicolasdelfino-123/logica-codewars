/* 🟦 Ejercicio 1 — sumOfPositive
Dado un array de números, devolvé la suma de los positivos.
*/

/* 
const sumOfPositive = (arr) => {

    return arr.reduce((acc, ele) => {
        if (ele >= 0) {
            acc += ele
        }
        return acc
    }, 0)
}
 */


/* const sumOfPositive = (arr) => {

    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0)
            result += arr[i]
    }
    return result
} */



const sumOfPositive = (arr) =>

    arr.filter((num) => num > 0)
        .reduce((acc, num) => num + acc, 0)




console.log(sumOfPositive([1, -2, 3, 4, -1]));
// → 8 