/* 🎫 TICKET — shiftWhile

Objetivo:
Implementar una función que saque elementos del inicio del array mientras esos elementos cumplan una condición dada.
Cuando aparece el primer elemento que NO cumple la condición, se deja de sacar y se devuelve el array restante.

Requerimientos:

Recibe:

un array

una función de condición (callback)

Debe recorrer el array desde el inicio.

Mientras la condición devuelva true, se siguen quitando elementos del principio.

Cuando la condición devuelva false por primera vez, se corta.

No usar shift() (queremos practicar slices y control de índices).

No mutar el array original.*/

const shiftWhile = (arr, condicion) => {
    let indice = 0

    for (let i = 0; i < arr.length; i++) {
        if (condicion(arr[i]) === true) {
            continue
        } else if (condicion(arr[i]) === false) {
            indice = i
            break
        }

    }

    return arr.slice(indice)
}
/* 
const shiftWhile = (arr, condicion) => {
    let indice = 0;

    for (let i = 0; i < arr.length; i++) {
        // si la condición deja de cumplirse → encontramos el corte
        if (!condicion(arr[i])) {
            indice = i;
            break;
        }

        // si llegamos al final y todos cumplieron la condición
        indice = arr.length;
    }

    return arr.slice(indice);
};
 */

console.log(shiftWhile([0, 0, 1, 2, 3], x => x === 0))
// → [1,2,3]

console.log(shiftWhile([2, 4, 6, 7, 8], x => x % 2 === 0))
// → [7,8]

console.log(shiftWhile(["a", "a", "b", "c"], x => x === "a"))
// → ["b","c"]

console.log(shiftWhile([5, 6, 7], x => x < 5))
// → [5,6,7]  (nadie cumple, no se elimina nada)

console.log(shiftWhile([], x => x > 0))
// → []
