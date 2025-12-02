/* 🟦 Día 4 — Ejercicio 3 (DEFINITIVO)
📌 Nombre
removePropertiesByCondition
📌 Consigna profesional
Implementá removePropertiesByCondition(obj, conditionFn) que:
    1. Reciba un objeto y una función condición.
    2. Devuelva un nuevo objeto sin mutar el original.
    3. Se deben eliminar todas las propiedades cuyo valor cumpla la condición.
    4. Si ninguna propiedad cumple, devolver el mismo objeto pero clonado.
🟩 Console.log obligatorios

⭐ Método “pro” sugerido después:
    • Object.entries() + filter + Object.fromEntries() */




console.log(removePropertiesByCondition({ a: 1, b: 5, c: 10 }, v => v > 5));
// → { a:1, b:5 }

console.log(removePropertiesByCondition({ x: "hola", y: "js" }, v => v.length < 3));
// → { x:"hola" }