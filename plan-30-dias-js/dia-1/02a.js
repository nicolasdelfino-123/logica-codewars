/* 🟧 EXTRA ASIGNADO
insertTwoAtBeginningImmutable(array, e1, e2)
Insertar dos elementos al inicio sin mutar.
*/

const insertTwoAtBeginningImmutable = (array, e1, e2) => [e1, e2, ...array]


console.log(insertTwoAtBeginningImmutable([3, 4, 5], 1, 2));
// → [1,2,3,4,5] 