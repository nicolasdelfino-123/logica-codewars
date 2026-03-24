/* /* Consigna 2 – Pasar nombres a mayúsculas

Tenés este array:



Consigna:

Crear un nuevo array con los nombres 1ra letra en mayúsculas. */

const nombres = ["ana", "pedro", "juan"]

const getUpper = (arr) => {
    return arr.map((item) =>
        item[0].toUpperCase() + item.slice(1)
    )
}

console.log(getUpper(nombres))