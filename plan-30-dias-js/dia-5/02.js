/* 🟦 Día 5 — Ejercicio 2 (DEFINITIVO)
📌 Nombre
filterInStock
📌 Consigna profesional
Implementá filterInStock(products) que:
    1. Reciba productos con { nombre, stock }.
    2. Devuelva solo los que tengan stock > 0.
    3. No debe mutar el array original.
🟩 Console.log obligatorios

⭐ Método “pro” sugerido después:
    • filter + short return */


// salió de las dos formas
const filterInStock = (products) => {

    let result = []
    for (let value of products) {
        if (value.stock > 0) {
            result.push(value)
        }
    }
    return result


}


/* 
const filterInStock = (products) => {

         return [...products].filter((ele) => ele.stock > 0)
   } */



console.log(filterInStock([
    { nombre: "Lapicera", stock: 10 },
    { nombre: "Libro", stock: 0 }
]));
// → [ { nombre:"Lapicera", stock:10 } ]