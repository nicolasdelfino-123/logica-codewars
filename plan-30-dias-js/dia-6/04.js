/* 🟦 Ejercicio 4 — getEvenValues
Dado un objeto, devolvé solo las propiedades cuyos valores sean números pares.
 */

//salió solo
/* function getEvenValues(obj) {

    let result = {}
    for (let property in obj) {
        if (obj[property] % 2 === 0) {
            result[property] = obj[property]
        }
    }
    return result
} */




console.log(getEvenValues({ a: 2, b: 3, c: 6 }));
// → { a:2, c:6 }