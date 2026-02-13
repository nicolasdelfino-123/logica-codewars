// EJ5 – Contar números mayores a X (X = 20)
const arr5 = [10, 25, 30, 15, 5];
// TU CODIGO
function mayores(arr) {
    let counter = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) {
            counter++
        }
    }
    return counter
}

console.log("EJ5:", mayores([10, 25, 30, 15, 5]), "→ esperado 2");