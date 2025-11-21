/* ## **Ejercicio 7**
Dado el array:  
`[100, 200, 300, 400, 500, 600]`  
Obtené un array que contenga **desde el índice 2 hasta el anteúltimo elemento**.  
**No podés usar números mágicos** (no poner 4 manualmente).  
Debe usarse `slice` en combinación con `.length`. */

const original = [100, 200, 300, 400, 500, 600]

const copia = original.slice(2, original.length - 1)

console.log(copia)