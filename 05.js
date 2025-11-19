/* const flatArray = (data) => {
    return [].concat(...data)
}
 */

// CON CONCAT SALIO OK

/* const flatArray = (arr) => {
    let nuevo = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            nuevo.push(arr[i][j])
        }

    }
    return nuevo
} */

const numPares = (arr) => {
    let pares = [];

    for (let subArrays of arr) {
        for (let item of subArrays) {
            if (subArrays[item] % 2 === 0) {
                pares.push(subArrays[item])

            }
        }
    }
    return pares
}


const data = [
    [3, 10, 7],
    [2, 4, 9, 11],
    [14, 15]
];

console.log(numPares(data))