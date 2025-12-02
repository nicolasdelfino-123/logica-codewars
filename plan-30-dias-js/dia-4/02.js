/* 🟦 Día 4 — Ejercicio 2 (DEFINITIVO)
📌 Nombre
getObjectValues
📌 Consigna profesional
Implementá getObjectValues(obj) que:
    1. Devuelva un array con todos los valores del objeto.
    2. Debe respetar el orden natural del objeto.
    3. Si el objeto está vacío, devolver [].
🟩 Console.log obligatorios

⭐ Método “pro” sugerido después:
    • Object.entries() (extraer valores desde entries) */

// salio solo
function getObjectValues(obj) {
    if (Object.entries(obj).length === 0) {
        return []
    }

    let result = []
    for (let value of Object.values(obj)) {
        result.push(value)
    }

    return result
}




console.log(getObjectValues({ a: 1, b: 2 }));
// → [1, 2]

console.log(getObjectValues({}));
// → []