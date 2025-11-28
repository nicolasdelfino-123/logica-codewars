/* 📘 Día 3 — Ejercicio 2 (DEFINITIVO)
🟦 Nombre
findFirstVowel
🟩 Consigna profesional
Implementá una función findFirstVowel(str) que:
    1. Reciba un string.
    2. Devuelva la primera vocal que aparezca en el string.
    3. Debe funcionar con mayúsculas y minúsculas.
    4. Si no hay vocales, devolvé null.
    5. No podés usar regex.
🟦 Console.log obligatorios
*/

const findFirstVowel = (str) => {

    let vocales = "aeiou".toLowerCase()
    for (let i = 0; i < str.length; i++) {

        if (vocales.includes(str[i].toLowerCase())) {
            return str[i]
        }
    }
    return null
}




console.log(findFirstVowel("Javascript"));
// → "a"

console.log(findFirstVowel("Rhythm"));
// → null 