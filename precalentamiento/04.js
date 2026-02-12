
// ========================
// EJERCICIO 4
// Calcular promedio
// ========================
const arr4 = [10, 20, 30, 40];

const promedio = (arr) => {
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    let promedio = total / arr.length
    return promedio
}


console.log("EJ4:", promedio([10, 20, 30, 40]), "→ esperado 25");