/* Dado un nombre completo "Nico Gutierrez" devolver "N.G".

console.log(abbrevName("Nico Gutierrez"));
// → "N.G" */


// solucion hardcodeadda mia
/* const abbrevName = (str) => {
    let palabras = str.split(" ")
    let resultado = ""
    for (let i = 0; i < palabras.length; i++) {
        for (let j = 0; j < palabras[i].length; j++) {
            if (palabras[i][j]) {
                resultado += palabras[i][j]
                palabras[i]++
            }

        }

    }
    resultado = resultado[0] + "." + resultado[1]
    return resultado
} */

const abbrevName = (str) => {

    if (str.length === 0) {
        return ""
    }
    return str.split(" ")
        .map((word) => word[0].toUpperCase())
        .join(".")
}




console.log(abbrevName("Nico Gutierrez"));
// → "N.G"

console.log(abbrevName("Juan Perez"));
// → "J.P"

console.log(abbrevName(""));
// → 

console.log(abbrevName("Maria"));
// → "M"
