/* 🟦 Ejercicio 10 — reverseWords
Inversión del ORDEN de palabras, no de las letras.
 */


const reverseWords = (str) => {

    let result = []
    // words array de strings
    let words = str.split(" ")
    console.log(words)
    for (let i = words.length - 1; i >= 0; i--) {
        result.push(words[i])

    }
    return result.join(" ")

}

/* const reverseWords = (str) => {
    return str
        .split(" ")
        .reverse()
        .join(" ")
} */



console.log(reverseWords("hola mundo js"));
// → "js mundo hola"