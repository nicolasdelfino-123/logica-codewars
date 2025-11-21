/* 
## **Ejercicio 10**
Dado el string:  
`"Programación"`  
Extraé `"ramac"` usando exclusivamente `slice`.

> *Ejercicio difícil: requiere calcular inicio y fin con cuidado.*
 */

// CON INDICES NEGATIVOS

/* const original = "Programación"
const copia = original.slice(-8, -3)

console.log(copia) */

// CON INDICIES POSITIVOS

const original = "Programación"
const copia = original.slice(4, 9)

console.log(copia)