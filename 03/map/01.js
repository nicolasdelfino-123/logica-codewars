/* Consignas clásicas para practicar map()
Consigna 1 – Duplicar números

Tenés este array:



Consigna:

Crear un nuevo array donde cada número esté multiplicado por 2.

Salida esperada:

[4, 8, 12, 16] */

const numeros = [2, 4, 6, 8];

const getMultiplied = (arr) => { return arr.map(num => num * 2) }


console.log(getMultiplied(numeros))