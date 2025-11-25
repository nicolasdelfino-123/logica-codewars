🔥 EJERCICIO 1 — Filtrar palabras por longitud

Conceptos evaluados: strings, arrays, filter/for, condición simple.

❗Consigna

Escribí una función getLongWords(arr, n) que reciba un array de strings y un número n.
Debe devolver solo las palabras cuya longitud sea mayor a n.

🧪 Tests
console.log(getLongWords(["hola", "adiós", "sol", "programación"], 4));
// ["adiós", "programación"]

console.log(getLongWords(["js", "css", "html"], 2));
// ["html"]

🔥 EJERCICIO 2 — Contar números mayores

Conceptos: arrays numéricos, comparación, acumulación.

❗Consigna

Crear la función countGreaterThan(arr, limit) que devuelva cuántos elementos del array son mayores al número limit.

🧪 Tests
console.log(countGreaterThan([10, 5, 20, 3, 50], 10));
// 2

console.log(countGreaterThan([1, 2, 3], 0));
// 3

🔥 EJERCICIO 3 — Primer carácter repetido

Conceptos: strings, recorrido, búsqueda, early return.

❗Consigna

Crear la función firstRepeatedChar(str) que devuelva el primer carácter que aparece repetido en el string.
Si no hay repetidos, devolver null.

🧪 Tests
console.log(firstRepeatedChar("abca")); 
// "a"

console.log(firstRepeatedChar("abcdef"));
// null

🔥 EJERCICIO 4 — Sumar pero sin duplicados

Conceptos: sets, arrays, for, includes, acumulación.

❗Consigna

Crear la función sumUnique(arr) que devuelva la suma de solo los números únicos, es decir, que aparecen una sola vez.

🧪 Tests
console.log(sumUnique([1, 2, 2, 3, 4, 4]));
// 1 + 3 = 4

console.log(sumUnique([10, 10, 10]));
// 0

🔥 EJERCICIO 5 — Invertir palabras

Conceptos: strings, arrays, manipulación, for o métodos.

❗Consigna

Crear la función reverseWords(str) que reciba una frase y devuelva cada palabra escrita al revés, pero manteniendo el orden de la frase.

Ejemplo:
"hola mundo" → "aloh odnum"

🧪 Tests
console.log(reverseWords("hola mundo"));
// "aloh odnum"

console.log(reverseWords("js es magia"));
// "sj se aigam"