/* 📘 DÍA 2 — Strings pensados como estructuras
Ejercicio 1 — countChars
Contar caracteres (sin espacios).

👉 Alternativa pro: split + filter */



/* function countChars(str) {
    let counter = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            counter++
        }
    }
    return counter
} */
/* function countChars(str) {

    return [...str].filter((ele) => ele !== ' ').length
} */

function countChars(str) {

    return str.split("").filter((ele) => ele !== ' ').length
}
console.log(countChars("hola mundo")); // 9
console.log(countChars("hola mundo"));      // 9
console.log(countChars(""));                // 0
console.log(countChars(" "));               // 0
console.log(countChars("   "));             // 0
console.log(countChars("a b c"));           // 3
console.log(countChars("JavaScript"));      // 10
console.log(countChars("hola   nico"));     // 8 