/* Consigna – some()

Tenés este array:


Consigna:

Crear una función que devuelva true si hay algún producto con cantidad 0.

Salida esperada:
true */


const carrito = [
    { producto: "Perfume", cantidad: 2 },
    { producto: "Crema", cantidad: 1 },
    { producto: "Body Splash", cantidad: 0 }
];

const getStockZero = (arr) => {
    return arr.some((ele) => ele.cantidad === 0)
}

console.log(getStockZero(carrito))