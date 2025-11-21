# 🟩 Módulo: Método `filter()` en JavaScript

## 📌 ¿Qué hace `filter()`?

`filter()` sirve para **crear un nuevo array** con todos los elementos del array original que **cumplen una condición**.

Es decir:

- Recorre el array, uno por uno  
- Evalúa una condición (true/false)  
- Si da true → se incluye en el array nuevo  
- Si da false → se descarta  
- **Nunca modifica el array original**  
- Siempre devuelve un array nuevo (que puede ser vacío)

### 📌 Sintaxis:
```js
array.filter((elemento, indice, arrayCompleto) => {
  return condicion;
});
📌 Ejemplo claro:
js
Copiar código
const numeros = [10, 5, 40, 2, 15];

const mayoresDe10 = numeros.filter(num => num > 10);

console.log(mayoresDe10); // [40, 15]
console.log(numeros);     // [10, 5, 40, 2, 15]
🧠 En resumen
Se usa para filtrar elementos

Devuelve un array nuevo

La cantidad puede ser menor, igual o cero

No modifica el original

🟢 5 Ejercicios FÁCILES de filter()
✅ Ejercicio 1 — Filtrar números mayores a 10
Dado:

js
Copiar código
[5, 12, 3, 20, 8]
Filtrá los números mayores a 10.

✅ Ejercicio 2 — Filtrar palabras largas
Dado:

js
Copiar código
["js", "react", "api", "frontend"]
Filtrá las palabras con más de 3 letras.

✅ Ejercicio 3 — Filtrar valores truthy
Dado:

js
Copiar código
[0, 1, "", "hola", null, "js"]
Con filter, creá un array con todos los valores truthy.

✅ Ejercicio 4 — Filtrar números pares
Dado:

js
Copiar código
[1, 2, 3, 4, 5, 6]
Filtrá los pares.

✅ Ejercicio 5 — Filtrar nombres que incluyan una letra
Dado:

js
Copiar código
["Nico", "Ana", "Juan", "Lucas"]
Filtrá los nombres que incluyan "a" (minúscula).

🟡 5 Ejercicios INTERMEDIOS de filter()
🟠 Ejercicio 6 — Filtrar objetos por propiedad
Dado:

js
Copiar código
[
  { nombre: "Nico", edad: 36 },
  { nombre: "Ana", edad: 20 },
  { nombre: "Juan", edad: 17 }
]
Filtrar solo las personas con edad mayor o igual a 18.

🟠 Ejercicio 7 — Filtrar textos prohibidos
Dado un texto dividido en palabras:

js
Copiar código
["hola", "quiero", "comprar", "gratis", "oferta"]
Y una lista de palabras prohibidas:

js
Copiar código
["gratis", "oferta"]
Filtrá todas las palabras que NO estén en la lista prohibida.

🟠 Ejercicio 8 — Filtrar precios válidos
Dado:

js
Copiar código
[0, 100, -20, 50, -5, 300]
Filtrá los precios que sean mayores que 0.

🟠 Ejercicio 9 — Filtrar strings que empiecen con una letra
Dado:

js
Copiar código
["casa", "auto", "perro", "gato", "avion"]
Filtrá solo los strings que empiecen con "a".

🟠 Ejercicio 10 — Filtrar usuarios activos
Dado:

js
Copiar código
[
  { user: "nico", activo: true },
  { user: "ana", activo: false },
  { user: "juan", activo: true }
]
Filtrar los usuarios donde activo === true.

🔥 5 Ejercicios HARD de filter()
🔴 Ejercicio 11 — Filtrar repetidos usando indexOf
Dado:

js
Copiar código
[1, 2, 2, 3, 4, 4, 5]
Filtrá un array con solo los valores únicos sin usar Set.

Pista:
indexOf() + filter() + index.

🔴 Ejercicio 12 — Filtrar emails válidos
Dado:

js
Copiar código
["nico@mail.com", "ana@gmail", "@hotmail.com", "juan@test.com"]
Filtrá solo los que contengan "@" y ".".

🔴 Ejercicio 13 — Filtrar productos por categoría
Dado:

js
Copiar código
[
  { nombre: "cafe molido", categoria: "cafe" },
  { nombre: "te verde", categoria: "te" },
  { nombre: "cafe instantaneo", categoria: "cafe" }
]
Filtrá solo los productos de la categoría "cafe" usando includes.

🔴 Ejercicio 14 — Filtrar según múltiples condiciones
Dado:

js
Copiar código
[
  { nombre: "Nico", edad: 36 },
  { nombre: "Ana", edad: 20 },
  { nombre: "Juan", edad: 17 },
  { nombre: "Lucia", edad: 40 }
]
Filtrá las personas con edad entre 20 y 40, inclusive.

🔴 Ejercicio 15 — Filtrar palabras que contengan vocales
Dado:

js
Copiar código
["rhythm", "sky", "php", "code", "js", "html"]
Filtrá solo las palabras que contengan al menos una vocal.

Pista:
Usá un array de vocales + .includes() + .some() o filter anidado.