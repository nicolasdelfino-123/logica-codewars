/* 📘 Día 3 — Ejercicio 4 (DEFINITIVO)
🟦 Nombre
reverseString
🟩 Consigna profesional
Implementá una función reverseString(str) que:
    1. Devuelva un nuevo string con los caracteres en orden inverso.
    2. No podés usar .reverse() porque es de arrays.
    3. Debés construir el string manualmente.
    4. Debe funcionar para cualquier tipo de caracteres (letras, números, símbolos).
🟦 Console.log obligatorios

⭐ Forma “más pro” para resolver después:
    • reduce */

// resolucion mia
/* function reverseString(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }

    return result
} */

function reverseString(str) {
    return str.reduce((acc, ele, index, str) => {

    }, "")
}

console.log(reverseString("Hola"));
// → "aloH"

console.log(reverseString("12345"));
// → "54321"