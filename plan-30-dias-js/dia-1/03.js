/* 🟦 Ejercicio 3 — cloneArrayMultipleWays
📌 Consigna
Implementá cloneArrayMultipleWays(array) que:
    1. Devuelva un objeto con 3 clones distintos del mismo array.
    2. Los clones deben ser independientes entre sí.
    3. No mutar el array original.
    4. No repetir el mismo método 3 veces.
Formato del return:
{
  clone1: [...],
  clone2: [...],
  clone3: [...]
}
🟩 Console.logs obligatorios
*/

const cloneArrayMultipleWays = (array) => {
    const obj = {
        clone1: [],
        clone2: [],
        clone3: []
    }

    obj.clone1 = [...array]
    obj.clone2 = [].concat(array)
    obj.clone3 = array.slice(0, array.length)
    return obj



}



console.log(cloneArrayMultipleWays([1, 2, 3]));
// → { clone1:[1,2,3], clone2:[1,2,3], clone3:[1,2,3] } 

