/* Ejercicio 2 — reverseString
Invertir string.

👉 Alternativa pro: split + reverse + join */



/* const reverseString = (str) => {
    return str.split("").reverse().join("")
} */

/* const reverseString = (str) => {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
} */

// prepend ( voy pegando adelante siempre)
const reverseString = (str) => {
    let result = ""
    for (let char of str) {
        result = char + result
    }
    return result
}


console.log(reverseString("nico "))
console.log(reverseString("nico ")); // "ocin"
console.log(reverseString("nico"));          // "ocin"
console.log(reverseString(""));              // ""
console.log(reverseString("a"));             // "a"
console.log(reverseString("ab"));            // "ba"
console.log(reverseString("hola  mundo "));    // "odnum aloh"