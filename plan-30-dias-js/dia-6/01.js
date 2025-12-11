/* 1) removeFirstAndLast
Eliminar primer y último sin mutar.
*/


const removeFirstAndLast = (arr) => {

    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0 && i !== arr.length - 1) {
            result.push(arr[i])
        }
    }
    return result
}



/* const removeFirstAndLast = (arr) => {

    let result = []
    let indice = 0
    for (let value of arr) {
        if (indice != 0 && indice != arr.length - 1) {
            result.push(value)
        }
        indice++
    }
    return result
} */

/* const removeFirstAndLast = (arr) => {

    let result = arr.slice(1, -2)
    return result
} */

console.log(removeFirstAndLast([1, 2, 3, 4]));
// → [2,3] 