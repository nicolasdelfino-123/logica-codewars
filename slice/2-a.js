/* ## Ejercicio 2-A
🧩 Ejercicio avanzado (slice + índices negativos)
Dado el array:
["a", "b", "c", "d", "e", "f", "g", "h"]

Obtené un nuevo array con los elementos entre el 3° y el 5° empezando desde el final (inclusive el 3°, exclusivo el 5°), usando solo índices negativos en slice. */
const original = ["a", "b", "c", "d", "e", "f", "g", "h"]
const copia = original.slice(-4, -2)


console.log(copia)