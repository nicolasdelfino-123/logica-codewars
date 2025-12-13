/* 🟦 Ejercicio 9 — cloneObjectAndAdd
Cloná un objeto y agregale una propiedad nueva sin mutar el original.
 */

function cloneObjectAndAdd(obj, key, value) {


    let clone = { ...obj, [key]: value }
    return clone

}




console.log(cloneObjectAndAdd({ a: 1 }, "b", 2));
// → {a:1, b:2}