/* Ejercicio 3 — isWordPresent
Buscar palabra (case-insensitive).
*/

/* const isWordPresent = (str, word) => {
    return str.toLowerCase().includes(word.toLowerCase())


} */

const isWordPresent = (str, word) => {
    let palabras = str.toLowerCase().split(" ")
    for (let palabra of palabras) {
        if (palabra.includes(word.toLowerCase())) {
            return true
        }
    }
    return false

}


console.log(isWordPresent("Hola Nico JS", "nico")); // true
console.log(isWordPresent("Hola Nico JS", "nico")); // true
console.log(isWordPresent("Hola Nico JS", "JS"));   // true
console.log(isWordPresent("Hola Nico JS", "python"));// false 