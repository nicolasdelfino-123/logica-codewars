/* ## **Ejercicio 1**
Dado el array:  
`["a", "b", "c", "d", "e"]`  
Obtené un nuevo array con **los primeros 2 elementos**. */

const arrayOriginal = ["a", "b", "c", "d", "e"]
const copia = arrayOriginal.slice(0, 2)

console.log(copia)