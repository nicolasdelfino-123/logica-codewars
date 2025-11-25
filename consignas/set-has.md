<!-- ⭐ Versión con Set (resuelta y explicada)
const firstRepeatedChar = (str) => {
    let seen = new Set();       // 1) Creamos un Set vacío para guardar letras vistas

    for (let letra of str) {    // 2) Recorremos cada letra del string
        if (seen.has(letra)) {  // 3) Si la letra YA está en el Set, es repetida
            return letra;
        }
        seen.add(letra);        // 4) Si no está, la agregamos al Set
    }

    return null;                // 5) Si terminamos todo el recorrido sin repetidos
};


🧠 Explicación detallada (this is gold)
1) let seen = new Set();
Un Set es como un array especial que:


solo guarda valores únicos


no permite duplicados


te permite consultar muy rápido si algo existe (.has())


Se usa muchísimo para detectar repetidos en entrevistas.
Acá lo usamos para llevar registro de letras ya vistas.

2) for (let letra of str)
for…of es ideal para strings:


no necesitás índices


es más legible


te da cada letra directamente



3) if (seen.has(letra))
Acá está la magia:


has() te dice si el Set ya contiene ese valor.


Es O(1) → muy eficiente.


Si .has(letra) da true:
👉 significa que ya había aparecido antes
👉 entonces esta es la primera letra repetida
👉 devolvemos esa letra al instante

4) seen.add(letra)
Si la letra no apareció antes:


la agregamos al Set


así la próxima vez que la encontremos, la detectamos



5) return null
Si terminamos todo el string sin encontrar repetidos, devolvemos null.

✔️ EJEMPLOS
console.log(firstRepeatedChar("abca"));
// "a"

console.log(firstRepeatedChar("abcdef"));
// null


⭐ ¿Por qué este método es tan valorado?
Porque demuestra:


entendimiento de estructuras de datos modernas


eficiencia (no recorrés storage a cada paso)


código limpio y legible


uso correcto de Set y sus métodos


En entrevistas, si resolvés así, te aplauden.

Si querés, ahora pasamos al Ejercicio 4 — sumUnique,
o me decís si querés intentar otra variante más con Map.


Detectar repetidos con Set → pregunta clásica

Contar apariciones con Map → pregunta básica/intermedia

Quitar duplicados con Set → tarea común de la vida real -->