// EJ4 – Contar números negativos
const arr4 = [-2, 5, -7, 9, -1];
// TU CODIGO

function negativos(arr) {
    let counter = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter++
        }
    }
    return counter
}


console.log("EJ4:", negativos([-2, 5, -7, 9, -1]), "→ esperado 3");