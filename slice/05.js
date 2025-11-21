/* ## **Ejercicio 5**
Dado el string:  
`"Nicolás"`  
Usando `slice`, obtené `"Nico" y metelo en una lista`.

> *Tip: `slice` funciona también con strings.*
 */

const original = "Nicolas"
const copia = original.slice(0, 4).split()
console.log(copia)