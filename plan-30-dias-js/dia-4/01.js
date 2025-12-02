/* 🟦 Día 4 — Ejercicio 1 (DEFINITIVO)
📌 Nombre
getObjectKeys
📌 Consigna profesional
Implementá getObjectKeys(obj) que:
    1. Reciba un objeto.
    2. Devuelva un array con todas las claves del objeto.
    3. No debe depender del orden de las propiedades.
    4. Si el objeto está vacío, devolvé un array vacío.
🟩 Console.log obligatorios
*/

//solucion mia 
/* function getObjectKeys(obj) {

    let arr = []
    if (Object.keys(obj).length === 0) {
        return []
    }

    for (let key in obj) {
        arr.push(key)
    }

    return arr
} */

// solucion pro

/* function getObjectKeys(obj) {

    let arr = []
    if (Object.keys(obj).length === 0) {
        return []
    }

    return Object.keys(obj)
} */

// forma aun mas pro

function getObjectKeys(obj) {
    return Object.keys(obj)
}



console.log(getObjectKeys({ nombre: "Nico", edad: 37 }));
// → ["nombre", "edad"]

console.log(getObjectKeys({}));
// → [] 