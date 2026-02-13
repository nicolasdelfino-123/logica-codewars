// ========================
// EJERCICIO 2
// Encontrar el número mayor
// ========================
const arr2 = [12, 5, 99, 34, 21];

const mayorAll = (arr) => {
    let mayor = arr[0]

    for (let i = 0; i < arr.length; i++) { // aca es mejor empezar comparandolo con let i = 1
        if (arr[i] > mayor) {
            mayor = arr[i]
        }
    }
    return mayor;
}

console.log("EJ2:", mayorAll([12, 5, 99, 34, 21]), "→ esperado 99");
