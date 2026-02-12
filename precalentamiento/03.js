// ========================
// EJERCICIO 3
// Encontrar el número menor
// ========================
const arr3 = [12, 5, 99, 34, 21];

function menor(arr) {
    let menor = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i]
        }
    }

    return menor;
}
console.log("EJ3:", menor([12, 5, 99, 34, 21]), "→ esperado 5");