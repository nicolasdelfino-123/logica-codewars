## 📌 ¿Qué es `indexOf()` y para qué sirve?

`indexOf()` se usa para **buscar el índice** donde aparece un valor dentro de un array o de un string.  
Funciona en:
✔ Arrays  
✔ Strings  
❌ No funciona en objetos ni números

Su forma básica es:
`array.indexOf(valorBuscado)`  
`string.indexOf(valorBuscado)`

Si el valor **existe**, devuelve su índice (0, 1, 2, …).  
Si **NO existe**, devuelve `-1`.

Se usa para:
- Ver si un valor está en un array  
- Buscar la posición de una palabra o letra  
- Combinarlo con `splice` para eliminar elementos por valor  
- Recorrer arrays y evitar duplicados  
- Hacer validaciones dinámicas  
- Encontrar elementos repetidos

**Ejemplo claro:**
```js
const arr = ["js", "python", "go", "js"];

arr.indexOf("python"); // 1
arr.indexOf("js");     // 0 (la primera aparición)
arr.indexOf("php");    // -1 (no existe)
En resumen:

Busca valores

Devuelve índice

Si no existe → -1

Funciona en arrays y strings


---

# 🧩 **10 Ejercicios de `indexOf()` (variedad, bucles permitidos)**

Acá empieza la magia.  
Ejercicios reales, rebuscados, útiles, nada aburridos.

---

## **Ejercicio 1 — Buscar la primera coincidencia**
Dado:  
`["rojo", "azul", "verde", "azul", "negro"]`  
Encontrá el **primer índice** donde aparece `"azul"`.

---

## **Ejercicio 2 — Verificar si un valor NO existe**
Dado un array de números:  
`[5, 7, 9, 12]`  
Usando `indexOf()`, imprimí `"NO ESTA"` solo si el 10 no existe en el array.

---

## **Ejercicio 3 — Filtrar elementos no repetidos (sin filter)**
Dado:  
`[1, 2, 2, 3, 4, 4, 5]`  
Usando un **for** y `indexOf()`, creá un array con los **números que aparecen una sola vez**.

*(Este es MUY bueno para practicar pensamiento lógico)*

---

## **Ejercicio 4 — Primera aparición de una letra**
Dado el string:  
`"Programación"`  
Obtené el índice donde aparece `"a"` por primera vez.

---

## **Ejercicio 5 — Comprobar si un string contiene una palabra**
Dado:  
`"Me gusta aprender JavaScript"`  
Usá `indexOf()` para verificar si contiene `"Java"`.  
Si contiene, devolvé `true`, si no, `false`.

---

## **Ejercicio 6 — Buscar todas las posiciones de un valor**
Dado:  
`["🍎", "🍌", "🍎", "🍓", "🍎"]`  
Usando un **for**, encontrá **todos los índices donde aparece la manzana** `"🍎"`  
y guardalos en un array.

---

## **Ejercicio 7 — Eliminar un valor (sin usar números mágicos)**
Dado:  
`["html", "css", "js", "react"]`  
Buscá el índice de `"js"` usando `indexOf()`  
y luego ELIMINALO del array usando `splice()`.

*Este es el clásico patrón: indexOf → splice.*

---

## **Ejercicio 8 — Detectar duplicado**
Dado:  
`["nicolás", "juan", "ana", "juan", "sofia"]`  
Usando `indexOf()` dentro de un **for**, detectá cuál nombre aparece más de una vez  
(y devolvé ese nombre).

---

## **Ejercicio 9 — Comprobar si un valor está en una lista permitida**
Tenés una “lista blanca”:  
`let permitidos = ["admin", "editor", "invitado"];`  
Pedí un `rol` (hardcodeado), por ejemplo `"editor"`,  
y usá `indexOf()` para verificar si está permitido.

Si está → `"ROL OK"`  
Si no → `"ROL INVALIDO"`

---

## **Ejercicio 10 — Validación de contraseña**
Dado un string contraseña, por ejemplo:  
`"nicodev123"`  
Validar que NO contenga ninguno de estos caracteres prohibidos:  
`[" ", "/", "\\", "*", "#"]`

Usá un **for** + `indexOf()` para verificarlo.  
Si encuentra uno → `"CONTRASEÑA INVALIDA"`  
Si no encuentra ninguno → `"OK"`

---

Listo, Nico.  
Este módulo te va a subir el nivel **BRUTALMENTE**, porque `indexOf()` es uno de los métodos más usados para resolver lógica en entrevistas y en Codewars.

¿Querés que mañana prepare el **Módulo 4 – `includes()`** o seguimos más profundo con `indexOf()` (nivel avanzado)?

🔥 5 Ejercicios Avanzados de indexOf()
IndexOf Avanzado 1 — Encontrar todas las posiciones de una palabra en un texto

Dado el texto:
"hola js hola python hola js hola css"
Encontrá todas las posiciones donde aparece "hola" usando un while + indexOf() y sin explotar el texto completo.

IndexOf Avanzado 2 — Detectar el primer valor repetido

Dado:
[10,20,30,20,40,50,10]
Usando un for, encontrá cuál es el primer valor repetido.

IndexOf Avanzado 3 — Buscar palabra prohibida

Dado un texto y un array de palabras prohibidas:
["spam", "fake", "ban"]
Usando un for + indexOf(), determiná si el texto contiene alguna de esas palabras.

IndexOf Avanzado 4 — Índice de un objeto por propiedad

Dado:

const usuarios = [
  { id: 1, nombre: "Nico" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Juan" }
];


Encontrá el índice del usuario cuyo nombre sea "Juan" usando un for + indexOf lógico (comparando por propiedad, no por objeto completo).

IndexOf Avanzado 5 — Extraer valores únicos sin usar Set

Dado:
[1,2,3,2,1,5,3,6]
Usando un for + indexOf() generá un array con los valores únicos solamente en el orden original.