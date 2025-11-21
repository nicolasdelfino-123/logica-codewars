## 📌 ¿Qué hace `includes()` y dónde se puede usar?

`includes()` sirve para **verificar si un valor existe** dentro de un array o un string.  
Su única respuesta posible es:
- `true` → si el valor está  
- `false` → si NO está

Funciona en:
✔ Arrays  
✔ Strings  
❌ No funciona en objetos ni números

### Sintaxis:
- `array.includes(valor)`
- `string.includes(texto)`

### Importante:
- La búsqueda es **exacta y sensible a mayúsculas y minúsculas**.  
- No devuelve índice (como `indexOf()`), solo `true/false`.  
- En strings, busca un **substring** (un pedazo de texto).  
- En arrays, busca una **coincidencia exacta** del valor.

### Ejemplos claros:

```js
["js", "python", "go"].includes("python"); 
// true

"Programación".includes("grama");
// true

"JavaScript".includes("java");
// false (la mayúscula importa)

[1, 2, 3, 4].includes(5);
// false

🧠 En resumen:

Pregunta: “¿Está este valor acá?”

Respuesta: true / false

Funciona en arrays y strings

No modifica nada

----

---

# 🟢 **5 Ejercicios Fáciles (`includes()` nivel básico)**

### **Ejercicio 1**
Dado: `["a","b","c","d"]`  
Verificá si `"c"` está en el array.

---

### **Ejercicio 2**
Dado el string: `"Aprendiendo JavaScript"`  
Verificá si contiene `"Java"`.

---

### **Ejercicio 3**
Dado: `[10, 20, 30, 40]`  
Escribí una condición que imprima `"ENCONTRADO"` solo si 20 está en el array.

---

### **Ejercicio 4**
Dado el string: `"Buenos días"`  
Verificá si contiene la letra `"ñ"`.

---

### **Ejercicio 5**
Dado: `["html","css","js"]`  
Verificá si `"react"` está incluido. Si no está, imprimí `"FALTA"`.

---

# 🟡 **5 Ejercicios Intermedios (`includes()` + lógica real)**

### **Ejercicio 6 — Lista blanca**
Dado un array de roles permitidos:  
`["admin","editor","viewer"]`  
y una variable `rol = "editor"`  
Usá includes para verificar si el rol está permitido.

---

### **Ejercicio 7 — Filtro de palabras prohibidas**
Dado un texto y las palabras prohibidas:  
`["spam", "oferta", "gratis"]`  
Usá un **for** + `includes()` para detectar si el texto contiene alguna palabra prohibida.

---

### **Ejercicio 8 — Validación de extensión de archivo**
Dado:  
`[".jpg",".png",".webp"]`  
y un archivo `"foto.png"`  
Verificar si el archivo **tiene una extensión permitida** usando `includes()`.

Pista: usá `slice()` para sacar los últimos 4 caracteres del archivo.

---

### **Ejercicio 9 — Coincidencias parciales en strings**
Dado el string `"frontend developer"`  
Verificá si contiene `"end"` y `"dev"` usando includes dos veces.

---

### **Ejercicio 10 — Detección de vocales**
Dado un string cualquiera, verificá si contiene **cualquiera de las vocales**:  
`["a","e","i","o","u"]`  
Usá un **for** + includes.

---

# 🔥 **5 Ejercicios HARD (includes + bucles + lógica avanzada)**

### **Ejercicio 11 — Detección de caracteres prohibidos**
Dado un string contraseña y la lista:  
`[" ", "#", "*", "/", "\\"]`  
Detectá si incluye **alguno** de esos caracteres.  
Si incluye uno → `"INVALIDA"`  
Si no → `"OK"`  
Usar for + includes.

---

### **Ejercicio 12 — Validar palabras clave mínimas**
Dado un texto y una lista de palabras obligatorias:  
`["js","web","code"]`  
Verificá que **TODAS** estén presentes.  
Si falta alguna → `"Falta palabra: X"`

---

### **Ejercicio 13 — Filtrar productos por categoría**
Dado productos:

```js
[
  "cafe-molido",
  "cafe-instantaneo",
  "te-negro",
  "te-verde",
  "cafe-espresso"
]
Crear un array nuevo solo con los productos que incluyan "cafe" usando filter + includes.

Ejercicio 14 — Buscar coincidencias aproximadas

Dado el array:
["javascript", "java", "typescript", "python"]
Crear un array con todos los elementos que incluyan la cadena "java" dentro.

Ejercicio 15 — Desarmar un texto en palabras válidas

Dado:
"Hoy comí pizza con amigos"
y un array de palabras válidas:
["pizza","amigos","code","js","bootcamp"]
Extraer solo las palabras válidas:
→ ["pizza","amigos"]

Hint: usar .split(" ") + includes.

🟥 5 EXTRA HARD (para sobresalir en lógica)
Ejercicio 16 — Censurar palabras prohibidas

Dado un texto largo y palabras prohibidas, reemplazar cada palabra por "***"
Usando split + for + includes.

Ejercicio 17 — Detección de patrones en logs

Dado un array de logs:

[
  "ERROR: database connection",
  "OK: server running",
  "ERROR: resource not found",
  "WARNING: low memory"
]


Crear un array que contenga solo los logs con "ERROR" usando includes.

Ejercicio 18 — Autocompletado inteligente

Dado el array:

["programacion","producto","proyecto","problema","propuesta"]

Y un input: "pro"

Crear un array con todos los elementos que comiencen con "pro" usando includes en combinación con slice().

Ejercicio 19 — Búsqueda flexible

Dado una lista de usuarios:

["nico_dev", "juan123", "ana.js", "coder_nico", "nico98"]


Filtrar todos los que contengan "nico".

Ejercicio 20 — Permitir solo palabras de una lista

Dado un texto: "hola como estas nico"
y una lista de palabras válidas:
["hola","nico"]
Crear un array con solo las palabras permitidas.