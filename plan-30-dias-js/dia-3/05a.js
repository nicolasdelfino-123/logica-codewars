/* 📘 DÍA 3 — EXTRAS (repetición y variación)
🟦 Ejercicio 1 base: countCharacter(str, char)
Tema: recorrer string, contar, case-insensitive.
🔹 Extra 1 — countVowels
Consigna:
Implementá countVowels(str) que:
    1. Reciba un string.
    2. Devuelva cuántas vocales (a,e,i,o,u) tiene.
    3. Debe ser case-insensitive.

 */

// solucuion mia solo
/* const countVowels = (str) => {
    let norm = str.toLowerCase()
    let counter = 0
    let chara = "aeiou"
    for (let i = 0; i < norm.length; i++) {
        if (chara.includes(norm[i])) {
            counter++
        }
    }
    return counter

} */

// version mia de reduce la de abajo es mas clean porqeu usa spread en vez de split
/* const countVowels = (str) => {
    let norm = str.toLowerCase()


    return norm.split("").reduce((acc, ele) => {
        if (("aeiou").includes(ele.toLowerCase())) {
            acc++

        }
        return acc
    }, 0)

} */

const countVowels = (str) => {
    let norm = str.toLowerCase()


    return [...norm].reduce((acc, ele) => {
        if (("aeiou").includes(ele.toLowerCase())) {
            acc++

        }
        return acc
    }, 0)

}


console.log(countVowels("Javascript Avanza"));
// → 6

console.log(countVowels("Rhythm"));
// → 0