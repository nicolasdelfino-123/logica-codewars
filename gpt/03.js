/* 🔥 EJERCICIO 3 — Primer carácter repetido

Conceptos: strings, recorrido, búsqueda, early return.

❗Consigna

Crear la función firstRepeatedChar(str) que devuelva el primer carácter que aparece repetido en el string.
Si no hay repetidos, devolver null.*/

const firstRepeatedChar = (str) => {
    let storage = ""

    for (let letra of str) {
        if (storage.includes(letra)) {
            return letra
        } else {
            storage += letra
        }
    }
    return null

}

// 🧪 Tests
console.log(firstRepeatedChar("abca"));
// "a"

console.log(firstRepeatedChar("abcdef"));
// null 
