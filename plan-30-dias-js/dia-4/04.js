/* 🟦 Día 4 — Ejercicio 4 (DEFINITIVO)
📌 Nombre
filterStringProperties
📌 Consigna profesional
Implementá filterStringProperties(obj) que:
    1. Devuelva un nuevo objeto con solo las propiedades que tengan valores string.
    2. No debe mutar el objeto original.
    3. Si no hay strings, devolver {}.
🟩 Console.log obligatorios

⭐ Método “pro” sugerido después:
    • Object.entries() + reduce */

// solucion mia
/* function filterStringProperties(obj) {

    if (!obj) {
        return {}
    }
    let result = {}
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            result[key] = obj[key]
        }
    }
    return result
} */

// resolucion pro mirada una sola vez y replciada sin errorres

function filterStringProperties(obj) {
    if (!obj || typeof obj !== "object") {
        return {}
    }

    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (typeof value === 'string') {
            acc[key] = value

        }
        return acc
    }, {})
}


console.log(filterStringProperties({ a: 1, b: "hola", c: true, d: "nico" }));
// → { b:"hola", d:"nico" }

console.log(filterStringProperties({ a: 1, b: 2 }));
// → {}
