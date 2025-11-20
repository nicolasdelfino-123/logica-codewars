
/* 🧩 Ejercicio: sumEvenBetween
Consigna:

Escribí una función llamada sumEvenBetween.

Dado un rango de números enteros (num1 incluido, num2 excluido), la función debe retornar la suma de todos los números pares entre esos dos valores.

Si num2 no es mayor que num1, devolvé 0. */

function sumEvenBetween(num1, num2) {
    if (num2 < num1) return 0
    let total = 0
    for (let i = num1; i < num2; i++) {
        if (i % 2 === 0) {
            total += i
        }
    }
    return total

}

console.log(sumEvenBetween(2, 8))