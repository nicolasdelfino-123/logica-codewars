/* ## **Ejercicio 8**
Dado el array:  
`["a", "b", "c", "d", "e"]`  
Obtené un array con los elementos del índice **1 al 3 usando índices negativos**.

--- */

const original = ["a", "b", "c", "d", "e"]

const copia = original.slice(-4, -2)

console.log(copia)