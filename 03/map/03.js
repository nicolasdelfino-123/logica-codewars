/* Consigna 3 – Obtener solo los nombres

Tenés este array de objetos:



Consigna:

Crear un array que contenga solo los nombres de los productos.

Salida esperada:

["Perfume A", "Perfume B", "Perfume C"] */

const productos = [
    { nombre: "Perfume A", precio: 100 },
    { nombre: "Perfume B", precio: 200 },
    { nombre: "Perfume C", precio: 300 }
];

const getNames = (arr) => {
    return arr.map((ele) => ele.nombre)
}

console.log(getNames(productos))