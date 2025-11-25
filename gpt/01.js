/* 🔥 EJERCICIO 1 — Filtrar palabras por longitud

Conceptos evaluados: strings, arrays, filter/for, condición simple.

❗Consigna

Escribí una función getLongWords(arr, n) que reciba un array de strings y un número n.
Debe devolver solo las palabras cuya longitud sea mayor a n.

🧪 Tests
console.log(getLongWords(["hola", "adiós", "sol", "programación"], 4));
// ["adiós", "programación"]

console.log(getLongWords(["js", "css", "html"], 2));
// ["html"]   */

const getLongWords = (arr, n) => {

    return arr.reduce((acc, ele, index) => {
        ele.length > n ? acc.push(ele) : acc
        return acc
    }, [])
}


console.log(getLongWords(["hola", "adiós", "sol", "programación"], 4));
// ["adiós", "programación"]acc , 

console.log(getLongWords(["js", "css", "html"], 2));
// ["html"]   */