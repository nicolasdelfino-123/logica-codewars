/* Ejercicio 4 — findMax
Devolver el número mayor.

👉 Alternativa pro: reduce
 */


/* const findMax = (arr) => {
    let max = arr[0]
    for (let num of arr) {
        if (num > max) {
            max = num
        }
    }
    return max
} */


const findMax = (arr) => {

    return arr.reduce((acc, num) => acc > num ? acc : num, arr[0])

}
console.log(findMax([10, 5, 20])); // 20