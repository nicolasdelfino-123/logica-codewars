/* ## **Ejercicio 3**
Dado el array:  
`["js", "python", "java", "c#", "go"]`  
Obtené un array con los elementos **del índice 1 al 3**, sin incluir el 3.
 */

const original = ["js", "python", "java", "c#", "go"]
const copia = original.slice(1, 3)

console.log(copia)