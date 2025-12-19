/* 🟦 Ejercicio — countVowels (lógica pura)

Consigna:
Dado un string, devolver cuántas vocales tiene.
*/


function countVowels(str) {
    let counter = 0

    for (let letra of str) {
        if (("aeiou").includes(letra)) {
            counter++
        }
    }
    return counter
}






console.log(countVowels("hola mundo"))   // 4
console.log(countVowels("javascript"))  // 3)
console.log(countVowels(""))            // 0 )