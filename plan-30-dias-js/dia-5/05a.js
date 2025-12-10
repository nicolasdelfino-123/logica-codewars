/* 🔹 Extra 1 — maxPrice
Devolver el producto con precio máximo.
 */

function maxPrice(arr) {

    return arr.reduce((acc, ele) => acc.precio > ele.precio ? acc : ele, 0)
}


console.log(maxPrice([{ precio: 10 }, { precio: 50 }, { precio: 30 }]));
// → { precio:50 }