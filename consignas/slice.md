# 🧩 Módulo 1 — Ejercicios de `slice()`
## 📌 ¿Qué hace `slice()`?

## 📌 ¿Qué hace `slice()`? (explicación completa y clarísima)

`slice()` sirve para **copiar una parte** de un array **o** de un string sin modificar el original.  
Eso significa que `slice()` funciona en:
- ✔ Arrays  
- ✔ Strings  
- ❌ NO funciona en objetos ni números

`slice(inicio, fin)` toma los elementos desde `inicio` **incluido**, hasta `fin` **excluido**.  
Si no pasás `fin`, va desde `inicio` hasta el final.  
Acepta **índices negativos** (`-1` significa "el último").  
Siempre devuelve un **array nuevo** (si se lo aplicás a un array) o un **string nuevo** (si se lo aplicás a un string).

**Ejemplo claro:**
```js
const arr = ["a", "b", "c", "d"];
const copia = arr.slice(1, 3); 
// copia = ["b", "c"]
// arr queda igual: ["a", "b", "c", "d"]
En resumen:

Extrae una parte

Devuelve una copia

No modifica el original

Sirve para arrays y strings

`slice()` crea **un nuevo array o string** copiando una parte del original **sin modificarlo**.  
Recibe dos índices: `inicio` (incluido) y `fin` (excluido).  
Si no pasás el segundo índice, toma desde `inicio` hasta el final.  
Acepta **índices negativos** para contar desde el final (`-1` = último).  
Si el índice de inicio es mayor que el de fin, retorna un array vacío.  
`slice()` sirve para copiar, cortar, dividir y extraer partes de arrays o strings.  
Siempre devuelve una **nueva copia**, nunca altera el original.



Ejercicios progresivos para dominar el método `slice()` en JavaScript.  
No mezclar con otros métodos. No usar `splice()`, `filter()`, `map()`, ni loops para reemplazar `slice()`.

---

## **Ejercicio 1**
Dado el array:  
`["a", "b", "c", "d", "e"]`  
Obtené un nuevo array con **los primeros 2 elementos**.

---

## **Ejercicio 2**
Dado el array:  
`[10, 20, 30, 40, 50]`  
Obtené un nuevo array con **los últimos 3 elementos** usando solo `slice`.

---

## **Ejercicio 3**
Dado el array:  
`["js", "python", "java", "c#", "go"]`  
Obtené un array con los elementos **del índice 1 al 3**, sin incluir el 3.

---

## **Ejercicio 4**
Dado el array:  
`[1, 2, 3, 4, 5, 6]`  
Creá un array nuevo con **todos los elementos menos el primero**.

---

## **Ejercicio 5**
Dado el string:  
`"Nicolás"`  
Usando `slice`, obtené `"Nico"`.

> *Tip: `slice` funciona también con strings.*

---

## **Ejercicio 6**
Dado el array:  
`["lunes", "martes", "miércoles", "jueves", "viernes"]`  
Conseguí un array con **"miércoles" y "jueves"** únicamente.

---

## **Ejercicio 7**
Dado el array:  
`[100, 200, 300, 400, 500, 600]`  
Obtené un array que contenga **desde el índice 2 hasta el anteúltimo elemento**.  
**No podés usar números mágicos** (no poner 4 manualmente).  
Debe usarse `slice` en combinación con `.length`.

---

## **Ejercicio 8**
Dado el array:  
`["a", "b", "c", "d", "e"]`  
Obtené un array con los elementos del índice **1 al 3 usando índices negativos**.

---

## **Ejercicio 9**
Dado el string:  
`"JavaScript"`  
Obtené `"Script"` usando solamente `slice` y un índice negativo.

---

## **Ejercicio 10**
Dado el string:  
`"Programación"`  
Extraé `"ramac"` usando exclusivamente `slice`.

> *Ejercicio difícil: requiere calcular inicio y fin con cuidado.*

---


🔥 5 Ejercicios Avanzados de slice()
Slice Avanzado 1 — Extraer bloques dinámicos

Dado:
const arr = [1,2,3,4,5,6,7,8,9]
Usando slice(), extraé un bloque de 4 elementos centrado (los del medio), sin escribir números mágicos.
Debe funcionar incluso si el array cambia de tamaño.

Slice Avanzado 2 — Dividir un string en dos mitades

Dado:
"Programación"
Dividí el string en dos mitades usando slice() y devolvé un array con ambas mitades.
Si es impar, la mitad izquierda debe tener 1 letra más.

Slice Avanzado 3 — Clonar parcialmente un array sin el primer y último elemento

Dado:
[100, 200, 300, 400, 500]
Devolvé una copia sin el primer ni el último, pero sin usar índices fijos (debe adaptarse al tamaño del array).

Slice Avanzado 4 — Rotar un array

Dado:
["a","b","c","d","e"]
Rotá el array 2 lugares a la izquierda usando solo slice(), devolviendo:
["c","d","e","a","b"]

Slice Avanzado 5 — Últimos N caracteres dinámicos

Escribí una función que reciba (string, n) y devuelva los últimos n caracteres usando solo slice.
Ejemplo:
sliceEnd("JavaScript", 6) // "Script"