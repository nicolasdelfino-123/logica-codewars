/* ## **Ejercicio 4**
Dado el array:  
`[1, 2, 3, 4, 5, 6]`  
Creá un array nuevo con **todos los elementos menos el primero**. */

const original = [1, 2, 3, 4, 5, 6]
const copia = original.slice(1)
console.log(copia)