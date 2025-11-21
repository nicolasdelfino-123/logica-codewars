/* Ejercicio 6-B (slice + combinación de tramos)

Dado el array:

["rojo", "azul", "verde", "amarillo", "negro", "blanco"]


Obtené un nuevo array que contenga solamente:

"azul"

"amarillo"

"blanco"

Usando solo slice (los que necesites) y cualquier forma de combinarlos (spread, concat, flat, reduce lo que quieras). */

// SPREAD

/*
const original = ["rojo", "azul", "verde", "amarillo", "negro", "blanco"] */
/*
const copia = [
    ...original.slice(1, 2),
    ...original.slice(3, 4),
    ...original.slice(5)
]

console.log(copia) */


// CONCAT

/* const original = ["rojo", "azul", "verde", "amarillo", "negro", "blanco"]

const copia =
    [].concat(original.slice(1, 2))
        .concat(original.slice(3, 4))
        .concat(original.slice(5))


 */


//FLAT

/* const original = ["rojo", "azul", "verde", "amarillo", "negro", "blanco"] */

/* const copia = [
    original.slice(1, 2),
    original.slice(3, 4),
    original.slice(5),
].flat()


console.log(copia) */

/* REDUCE */

/* const original = ["rojo", "azul", "verde", "amarillo", "negro", "blanco"]

const tramos = [
    original.slice(1, 2),
    original.slice(3, 4),
    original.slice(5),
]

const result = tramos.reduce((acc, ele, indx, arr) => acc.concat(ele), [])

console.log(result) */