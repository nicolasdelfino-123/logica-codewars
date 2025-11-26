/* 🟧 EXTRA ASIGNADO
getElementsBefore(array, n)
Todos los elementos antes de n sin mutar.
 */

const getElementsBefore = (array, n) => {

    return array.slice(0, n)
}


console.log(getElementsBefore(['a', 'b', 'c', 'd'], 2));
// → ['a','b']