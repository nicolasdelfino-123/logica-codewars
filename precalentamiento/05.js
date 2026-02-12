// ========================
// EJERCICIO 5
// Contar cuántos números son mayores a 10
// ========================
const arr5 = [4, 15, 22, 8, 11];

const mayores = (arr) => {

    let total = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            total++
        }
    }
    return total;
}

console.log("EJ5:", mayores([4, 15, 22, 8, 11]), "→ esperado 3");