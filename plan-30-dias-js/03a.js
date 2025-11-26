/* 🟧 EXTRA ASIGNADO
cloneAndSort(array)
Clonar un array y devolver un clon ordenado sin mutar el original.
*/



const cloneAndSort = (array) => array.slice().sort((a, b) => a - b)



console.log(cloneAndSort([3, 1, 2]));
// original → [3,1,2]
// clon → [1,2,3] 