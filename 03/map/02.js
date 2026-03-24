/* Consigna 2 – Pasar nombres a mayúsculas

Tenés este array:



Consigna:

Crear un nuevo array con los nombres en mayúsculas.

Salida esperada:

["JUAN", "MARIA", "PEDRO"] */

const nombres = ["juan", "maria", "pedro"];

const convertNamesToUpper = (arr) => {
    return arr.map((ele) => ele.toUpperCase())
}

console.log(convertNamesToUpper(nombres))