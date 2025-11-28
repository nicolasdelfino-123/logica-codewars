/* 📘 Día 3 — Ejercicio 1 (DEFINITIVO)
🟦 Nombre
countCharacter
🟩 Consigna profesional
Implementá una función countCharacter(str, char) que:
    1. Reciba un string y un carácter.
    2. Devuelva cuántas veces aparece ese carácter en el string.
    3. La búsqueda debe ser case-insensitive (no debe importar mayúscula/minúscula).
    4. No podés usar filter() ni reduce().
    5. No podés convertir el string automáticamente en array; debés recorrerlo como string.
🟦 Console.log obligatorios
*/

//solucion mia solo ok
/* const countCharacter = (str, char) => {

    let totalChar = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char) {
            totalChar++
        }
    }
    return totalChar
} */
// solucion mia con reduce

const countCharacter = (str, char) => {

    let target = char.toLowerCase()
    return str.split("").reduce((acc, ele, index) => {
        if (ele.toLowerCase() === target) {
            acc++
        }
        return acc
    }, 0)
}



console.log(countCharacter("Javascript Avanza", "a"));
// → 5

console.log(countCharacter("NICO", "i"));
// → 1 