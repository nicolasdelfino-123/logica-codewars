/* 📘 Día 3 — Ejercicio 3 (DEFINITIVO)
🟦 Nombre
toSnakeCase
🟩 Consigna profesional
Implementá una función toSnakeCase(str) que:
    1. Reciba un string con palabras separadas por espacios.
    2. Devuelva un nuevo string en formato snake_case.
    3. No deben quedar espacios dobles ni espacios al principio o al final.
    4. Todo debe estar en minúsculas.
    5. No podés usar replaceAll().
🟦 Console.log obligatorios
*/

/* const toSnakeCase = (str) => {
    let minusculas = str.toLowerCase()
    console.log("minusculas", minusculas)

    let palabras = minusculas.split(" ")
    console.log("plabras", palabras)

    let filtrado = palabras.filter((palabra) => palabra !== "")
    console.log("filtrado", filtrado)

    let result = filtrado.join("_")
    return result


} */

// respuesta gpt

const toSnakeCase = (str) => {
    // 1. Limpiar espacios al inicio y final
    let limpio = str.trim();
    console.log("1) trim:", limpio);

    // 2. Separar por espacios (puede generar vacíos si hay dobles)
    let separado = limpio.split(" ");
    console.log("2) split:", separado);

    // 3. Filtrar elementos vacíos para evitar dobles espacios
    let filtrado = separado.filter(elem => elem !== "");
    console.log("3) filtrado:", filtrado);

    // 4. Pasar todo a minúsculas
    let minusculas = filtrado.map(elem => elem.toLowerCase());
    console.log("4) minusculas:", minusculas);

    // 5. Unir con "_"
    let resultado = minusculas.join("_");
    console.log("5) resultado:", resultado);

    return resultado;
};

// Console.log obligatorios


console.log(toSnakeCase("Hola Mundo Programador"));
// → "hola_mundo_programador"

console.log(toSnakeCase("  JS   Avanza  Full  "));
// → "js_avanza_full" 

console.log(toSnakeCase("Hola Mundo"));
console.log(toSnakeCase("   Hola   Mundo   "));
console.log(toSnakeCase("JavaScript es LO MEJOR")); 