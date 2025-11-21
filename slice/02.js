/* ## **Ejercicio 2**
Dado el array:  
`[10, 20, 30, 40, 50]`  
Obtené un nuevo array con **los últimos 3 elementos** usando solo `slice`. */

const original = [10, 20, 30, 40, 50]
const copia = original.slice(-3)

console.log(copia)