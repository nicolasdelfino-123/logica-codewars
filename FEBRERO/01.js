/* 易 EJERCICIO 1 — Conteo total de caracteres

Contexto:
En una aplicación web, necesitás saber cuántos caracteres ingresó un usuario
en un campo de texto, sin asumir que el input siempre es válido.

Consigna:
Implementá una función que reciba un valor y devuelva la cantidad total
de caracteres del string recibido.

Criterios:
- Si el argumento no es un string, devolver null
- Si el string está vacío, devolver 0
- Los espacios cuentan como caracteres */

/* function countCharacters(text) {
    let result = 0
    if (text === "") {
        return 0
    }
    if (typeof text !== 'string') {
        return null
    }
    for (let i = 0; i < text.length; i++) {
        result++
    }
    return result
} */

function countCharacters(text) {
    if (typeof text !== "string") return null;
    return text.length; // incluye espacios; "" -> 0
}

// Tests
console.log(countCharacters("hola"));          // 4
console.log(countCharacters("hello world"));   // 11
console.log(countCharacters(""));              // 0
console.log(countCharacters(123));             // null
console.log(countCharacters(null));            // null