// EJ1 – Crear nuevo array solo con pares
const arr1 = [1, 2, 3, 4, 5, 6];
// TU CODIGO

function pares(arr) {
    let nuevo = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            nuevo.push(arr[i])
        }
    }
    return nuevo
}
console.log("EJ1:", pares([1, 2, 3, 4, 5, 6]), "→ esperado [2,4,6]");