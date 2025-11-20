# 🧩 Módulo 2 — Ejercicios de `splice()`

## 📌 ¿Qué hace `splice()`?


---

# 📕 **README — `splice()` (explicación definitiva)**

```md
## 📌 ¿Qué hace `splice()`? (explicación completa y clarísima)

`splice()` sirve para **modificar un array existente**, eliminando, agregando o reemplazando elementos.  
Es importante: **splice SOLO funciona sobre ARRAYS**.  
No existe `splice()` en strings, objetos ni números.

La firma básica es:  
`splice(inicio, cantidadAEliminar, item1, item2, ...)`  
- `inicio`: dónde empezar a modificar  
- `cantidadAEliminar`: cuántos elementos borrar  
- lo que sigue se inserta en ese lugar  

`splice()` devuelve un **array con los elementos eliminados**, si eliminó algo.  
El array original **sí queda modificado**.

**Ejemplo claro:**
```js
const arr = ["a", "b", "d"];
const borrados = arr.splice(2, 0, "c"); 
// Inserta "c" en el índice 2
// borrados = []  (no eliminó nada)
// arr queda = ["a", "b", "c", "d"]
En resumen:

Modifica el array original

Puede borrar, agregar o reemplazar

Devuelve lo que borró

Funciona solo en arrays

`splice()` **modifica el array original** agregando, eliminando o reemplazando elementos.  
Recibe: `inicio`, `cantidadAEliminar` y luego los elementos a insertar.  
Podés usarlo para borrar uno o varios elementos dentro del array.  
Si `cantidadAEliminar` es 0, no elimina nada y solo inserta nuevos elementos.  
`splice()` devuelve un **array con los elementos eliminados**, si los hubiera.  
También permite reemplazar una sección completa en una sola operación.  
Es ideal para modificar listas dinámicamente sin crear nuevos arrays.


Ejercicios progresivos para dominar el método `splice()` en JavaScript.  
Recordá: **splice modifica el array original** y puede **agregar, quitar o reemplazar** elementos.

---

# 🔹 **5 Ejercicios Básicos**

## **Ejercicio 1 — Eliminar un elemento**
Dado el array:  
`["a", "b", "c", "d"]`  
Eliminá **el elemento en la posición 2** usando `splice`.

---

## **Ejercicio 2 — Eliminar varios elementos**
Dado el array:  
`[10, 20, 30, 40, 50]`  
Eliminá **los elementos en índice 1 y 2** usando un solo `splice`.

---

## **Ejercicio 3 — Insertar un elemento**
Dado el array:  
`["lunes", "martes", "jueves", "viernes"]`  
Insertá `"miércoles"` en la posición correcta sin eliminar nada.

---

## **Ejercicio 4 — Reemplazar un elemento**
Dado el array:  
`["js", "python", "java"]`  
Reemplazá `"python"` por `"TypeScript"` usando `splice`.

---

## **Ejercicio 5 — Insertar varios elementos**
Dado el array:  
`["a", "d"]`  
Insertá `"b"` y `"c"` entre medio usando un solo `splice`.

---

# 🔸 **5 Ejercicios Intermedios / No tan Básicos**

## **Ejercicio 6 — Eliminar el último elemento sin usar pop**
Dado:  
`[1, 2, 3, 4, 5]`  
Eliminá el **último** elemento usando únicamente `splice` (no podés usar `.length - 1` escrito a mano, debe ser dinámico).

---

## **Ejercicio 7 — Reemplazar una sección completa**
Dado el array:  
`["rojo", "verde", "azul", "negro", "blanco"]`  
Reemplazá `["verde", "azul"]` por `["amarillo", "cyan"]` usando un solo `splice`.

---

## **Ejercicio 8 — Insertar elementos al principio sin unshift**
Dado:  
`[3, 4, 5]`  
Insertá `1` y `2` al inicio usando un solo `splice`.

---

## **Ejercicio 9 — Remover elemento según su valor**
Dado:  
`["html", "css", "js", "react"]`  
Eliminá `"js"` usando `splice`, **pero primero debés encontrar su índice dinámicamente** (sin números mágicos).

---

## **Ejercicio 10 — Eliminar todos los elementos excepto los dos primeros**
Dado:  
`["a", "b", "c", "d", "e", "f"]`  
Usando un único `splice`, eliminá **todos los elementos excepto `"a"` y `"b"`**.

---

🔥 5 Ejercicios Avanzados de splice()
Splice Avanzado 1 — Intercalar valores

Dado:
[1, 3, 5, 7]
Insertá los números pares entre medio para que quede:
[1,2,3,4,5,6,7]
Usando múltiples splice() dinámicos.

Splice Avanzado 2 — Eliminar todos los repetidos

Dado:
[1,1,2,3,3,3,4]
Usando un for + indexOf() + splice(), eliminá todos los valores repetidos, dejando solo uno de cada uno.

Splice Avanzado 3 — Cortar un array en X partes

Dado un array y un número X, cortalo en X partes lo más iguales posibles, usando solo splice() para ir sacando las porciones.
Ejemplo con X=3:
[1,2,3,4,5,6,7,8] → [[1,2,3],[4,5,6],[7,8]]

Splice Avanzado 4 — Insertar un sub-array en una posición específica

Dado:
["a","b","e","f"]
Insertá ["c","d"] en el medio para que quede:
["a","b","c","d","e","f"]
Usar un único splice().

Splice Avanzado 5 — Reemplazar todos los negativos por 0

Dado:
[4,-2,7,-9,10]
Usando un for + splice() reemplazá cada número negativo por 0.
