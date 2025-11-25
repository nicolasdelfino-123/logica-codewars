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

----------------------------

⭐ PACK SAGRADO — 7 ejercicios obligatorios para entrevistas
🔥 1) Duplicar cada número (map)

Crear una función doubleNumbers(arr) que, dado un array de números, devuelva un nuevo array con cada número multiplicado por 2.

console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]


Concepto: map, transformación simple.

🔥 2) Filtrar mayores a un límite (filter)

Crear getAdults(arr) que reciba un array de edades y devuelva solo las edades mayores o iguales a 18.

console.log(getAdults([10, 18, 25, 12])); // [18, 25]


Concepto: filter con comparación.

🔥 3) Contar cuántos son verdad (filter + length)

Crear countTrues(arr) que reciba un array de booleanos y devuelva cuántos son true.

console.log(countTrues([true, false, true, true])); // 3


Concepto: filter + length.

🔥 4) Sumar todo (reduce)

Crear sumAll(arr) que devuelva la suma de todos los números usando reduce.

console.log(sumAll([1, 2, 3, 4])); // 10


Concepto: reduce básico.

🔥 5) Sacar el máximo (reduce)

Crear getMax(arr) que devuelva el número más grande usando reduce.

console.log(getMax([10, 3, 50, 7])); // 50


Concepto: reduce como comparador acumulado.

🔥 6) Contar ocurrencias (reduce)

Crear countLetters(str) que reciba un string y devuelva un objeto donde cada letra sea una clave y la cantidad de veces que aparece sea el valor.

Ejemplo:

countLetters("hola") // { h:1, o:1, l:1, a:1 }
countLetters("mama") // { m:2, a:2 }


Concepto: reduce acumulando en un objeto.

🔥 7) Convertir array de objetos en otro formato (map)

Dado un array de objetos con { nombre, edad }, devolver solo los nombres en un array nuevo.

console.log(getNames([
  { nombre: "Nico", edad: 37 },
  { nombre: "Ana", edad: 22 }
]));
// ["Nico", "Ana"]


Concepto: map extrayendo propiedades.

⭐ ¿Por qué estos 7 son SAGRADOS?

Porque si dominás:

map para transformar

filter para seleccionar

reduce para acumular

y cómo operar con objetos

Con estos 7 entendés el 80% de la lógica diaria en cualquier trabajo real.

Son los que te ponen en entrevistas y en pequeñas pruebas técnicas.