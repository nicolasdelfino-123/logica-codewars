/* 🟦 Ejercicio 6 — findWord
Dado un string, devolver true si contiene una palabra específica (case-insensitive).
*/

const findWord = (str, word) => {
    let text = str.toLowerCase()
    let target = word.toLowerCase()

    let palabras = text.split(" ")

    for (let palabra of palabras) {
        if (palabra === target) {
            return true
        }
    }

    return false
}


console.log(findWord("Hola Nico JS", "nico"));
// → true 