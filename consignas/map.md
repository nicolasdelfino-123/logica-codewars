## 📌 ¿Qué hace `map()` y para qué sirve?

`map()` sirve para **transformar cada elemento de un array** y devolver **un NUEVO array** con el resultado de esa transformación.

Es decir:
- Recorre el array original, **uno por uno**
- A cada elemento le aplica una función
- Y devuelve un array nuevo **del mismo tamaño**

IMPORTANTE:
- El array original **NO se modifica**
- `map()` siempre devuelve un array nuevo  
- Funciona solo en **arrays**
- Sirve para crear versiones modificadas, listas limpias, cálculos, formateos, etc.

### Sintaxis:
```js
array.map((elemento, indice, arrayCompleto) => {
  // retornar algo
})
const numeros = [1, 2, 3, 4];

const dobles = numeros.map(num => num * 2);

console.log(dobles);      // [2, 4, 6, 8]
console.log(numeros);     // [1, 2, 3, 4] (no cambia)

🧠 En resumen:

Transforma elementos

Devuelve array nuevo

El tamaño siempre es el mismo

No modifica el original

------------------------------------------------

🟢 3 Ejercicios Fáciles (HACER)

Para entender la base del método.

✔ Ejercicio 1 — Multiplicar por 3

Dado: [1, 2, 3, 4]
Devolver un array donde cada número esté multiplicado por 3.

✔ Ejercicio 2 — Capitalizar nombres

Dado: ["nico", "ana", "juan"]
Devolver: ["Nico", "Ana", "Juan"].

✔ Ejercicio 3 — Longitud de strings

Dado: ["js", "python", "go"]
Devolver un array con las longitudes: [2, 6, 2].

🟣 4 Ejercicios Nivel Entrevista / Vida Real (HACER)

Estos son importantes en React, empresas y lógica real.

⭐ Ejercicio 4 — Normalizar datos (vida real)

Dado: [" NICO ", " Ana ", " JuAn "]
Devolverlos:

sin espacios

en minúscula

Ej: ["nico", "ana", "juan"].

⭐ Ejercicio 5 — Extraer propiedades de objetos

Dado:

[
  { nombre: "Nico", edad: 36 },
  { nombre: "Ana", edad: 22 }
]


Devolver solo los nombres:
["Nico", "Ana"].

(Muy usado en React para renderizar listas)

⭐ Ejercicio 6 — Crear slugs para URLs

Dado:
["Curso de JavaScript", "Mi Página Web", "Hola Mundo"]

Crear:
["curso-de-javascript", "mi-página-web", "hola-mundo"]

(Este es RE típico de frontend)

⭐ Ejercicio 7 — Calcular totales de productos

Dado:

[
  { producto: "cafe", precio: 200, cantidad: 2 },
  { producto: "te", precio: 150, cantidad: 3 }
]


Devolver:
[400, 450]
(precio * cantidad)

(Esto aparece en entrevistas y en cualquier ecommerce)

------------------------------------------------
---

# 🟢 **5 Ejercicios Fáciles (map nivel inicial)**

### **Ejercicio 1**
Dado: `[1, 2, 3, 4]`  
Usá `map()` para devolver un array donde cada número esté multiplicado por 3.

---

### **Ejercicio 2**
Dado: `["nico", "ana", "juan"]`  
Devolver un array con cada nombre capitalizado (primera letra en mayúscula).

---

### **Ejercicio 3**
Dado: `[true, false, true]`  
Convertí cada booleano a su string: `"true"` o `"false"`.

---

### **Ejercicio 4**
Dado: `[5, 10, 15]`  
Sumale 1 a cada número usando map.

---

### **Ejercicio 5**
Dado: `["js", "css", "html"]`  
Crear un array con frases: `"Yo estudio js"`, `"Yo estudio css"`, etc.

---

# 🟡 **5 Ejercicios Intermedios (map + lógica)**

### **Ejercicio 6 — Longitud de strings**
Dado: `["nico", "javascript", "dev"]`  
Devolver un array con la **longitud** de cada palabra.

---

### **Ejercicio 7 — Aplicar IVA**
Dado precios: `[100, 200, 300]`  
Crear un array nuevo donde a cada precio se le sume un 21% de IVA.

---

### **Ejercicio 8 — Convertir objetos**
Dado:
```js
[
  { nombre: "Nico", edad: 36 },
  { nombre: "Ana", edad: 22 }
]
Usando map, devolvé solo los nombres: ["Nico", "Ana"].

Ejercicio 9 — Normalizar emails

Dado: ["NICO@MAIL.COM", "Test@GMAIL.com"]
Crear un array donde todos los mails estén en minúsculas.

Ejercicio 10 — Multiplicación por índice

Dado: [2, 4, 6, 8]
Crear un array donde cada número esté multiplicado por su índice.

Ej:
[2*0, 4*1, 6*2, 8*3]

🔥 5 Ejercicios HARD (map + arrays + strings + lógica real)
Ejercicio 11 — Extraer iniciales

Dado:
["Nicolás Delfino", "Ana Pérez", "Juan Cruz"]
Crear un array de iniciales: ["N.D.", "A.P.", "J.C."]

Ejercicio 12 — Limpiar datos sucios

Dado este array:

["   nico   ", "  ana", "juan   "]


Usá map() para devolverlos sin espacios y en minúscula.

Ejercicio 13 — Calcular totales

Dado:

[
  { producto: "cafe", precio: 200, cantidad: 2 },
  { producto: "te", precio: 150, cantidad: 3 }
]


Devolver un array con los totales: [400, 450].

Ejercicio 14 — Crear slugs para URLs

Dado:
["Curso de JavaScript", "Mi Página Web", "Hola Mundo"]
Crear un array de slugs en minúscula, reemplazando espacios por guiones:
["curso-de-javascript", "mi-página-web", "hola-mundo"]

Ejercicio 15 — Reducir objetos complejos

Dado:

[
  { titulo: "JS", info: { horas: 10 } },
  { titulo: "Python", info: { horas: 15 } }
]


Usar map para devolver: [10, 15]
(es decir, extraer solo las horas)