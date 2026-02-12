/*
易 EJERCICIO 2 — Conteo de ocurrencias de una letra

Contexto:
Un sistema necesita analizar texto ingresado por usuarios y contar
cuántas veces aparece una letra específica.

Consigna:
Implementá una función que reciba un string y una letra, y devuelva
cuántas veces aparece esa letra dentro del string.

Criterios:
- Ambos argumentos deben ser strings
- La letra debe tener longitud 1
- La comparación debe ser case insensitive
- Si el string está vacío, devolver 0
- Si algún criterio no se cumple, devolver null
*/

function countLetter(text, letter) {

    // primero valido tipos porque si letra es null explota
    if (typeof text !== 'string' || typeof letter !== 'string') {
        return null
    }

    if (letter.length !== 1) {
        return null
    }


    let counter = 0
    text = text.toLowerCase()
    letter = letter.toLowerCase()


    for (let i = 0; i < text.length; i++) {
        if (text[i] === letter) {
            counter++
        }
    }
    return counter
}

// Tests
console.log(countLetter("Hola Mundo", "h")); // 1
console.log(countLetter("JavaScript", "a")); // 2
console.log(countLetter("", "a"));           // 0
console.log(countLetter("test", "ab"));      // null
console.log(countLetter(123, "a"));          // null