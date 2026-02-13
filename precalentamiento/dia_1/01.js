// ========================
// EJERCICIO 1
// Sumar todos los números
// ========================
const arr1 = [3, 7, 2, 9, 4];

const sumAll = (arr) => {
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    return total;
}

console.log("EJ1:", sumAll(arr1), "→ esperado 25");
