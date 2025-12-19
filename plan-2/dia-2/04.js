/* Ejercicio 4 — capitalizeWords
Primera letra en mayúscula.

👉 Alternativa pro: map
 */

/* function capitalizeWords(str) {
    let palabras = str.toLowerCase().split(" ").filter(p => p !== "")
    let result = ""

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i]
        result += palabra[0].toUpperCase() + palabra.slice(1) + " "
    }

    return result.trim()
} */

/* function capitalizeWords(str) {
    let palabras = str.toLowerCase().split(" ").filter(p => p !== "")
    let result = ''
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i]
        result += palabra[0].toUpperCase() + palabra.slice(1) + " "
    }
    return result.trim()
}
 */
function capitalizeWords(str) {
    return str
        .toLowerCase()
        .split(" ").filter(p => p !== "")
        .map(word => {
            return word[0].toUpperCase() + word.slice(1)
        })
        .join(" ")
}




console.log(capitalizeWords("hola mundo"));
// "Hola Mundo"
console.log(capitalizeWords("hola mundo"));
// "Hola Mundo"

console.log(capitalizeWords("hola"));
// "Hola"

console.log(capitalizeWords(""));
// ""

console.log(capitalizeWords("hola   nico"));
// "Hola Nico"

console.log(capitalizeWords("hOlA mUnDo"));
// "Hola Mundo"