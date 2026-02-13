// EJ2 – Contar números pares
const arr2 = [2, 7, 8, 11, 14];
// TU CODIGO

function pares(arr) {
    let counter = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            counter++
        }
    }
    return counter
}


console.log("EJ2:", pares([2, 7, 8, 11, 14, 16]), "→ esperado 3");