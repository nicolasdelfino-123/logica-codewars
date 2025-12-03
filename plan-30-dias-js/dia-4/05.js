/* 🟦 Día 4 — Ejercicio 5 (DEFINITIVO)
📌 Nombre
mergeObjects
📌 Consigna profesional
Implementá mergeObjects(obj1, obj2) que:
    1. Reciba dos objetos.
    2. Devuelva un nuevo objeto con las propiedades de ambos.
    3. Si hay claves repetidas, deben prevalecer las del segundo objeto.
    4. No se deben mutar los objetos originales.
🟩 Console.log obligatorios
*/
// solucion mia

/* function mergeObjects(obj1, obj2) {
    let obj = { ...obj1, ...obj2 }
    return obj
}
 */

// solucion pro

function mergeObjects(obj1, obj2) {
    let obj = Object.assign({}, obj1, obj2)

    return obj
}


console.log(mergeObjects({ a: 1, b: 2 }, { b: 99, c: 3 }));
// → { a:1, b:99, c:3 }

console.log(mergeObjects({}, { x: 10 }));
// → { x:10 } 