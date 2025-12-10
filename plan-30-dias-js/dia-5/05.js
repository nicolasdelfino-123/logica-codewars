/* 🟦 Día 5 — Ejercicio 5 (DEFINITIVO)
📌 Nombre
averagePrice
📌 Consigna profesional
Implementá averagePrice(products) que:
    1. Reciba un array de { nombre, precio }.
    2. Devuelva el precio promedio.
    3. Si no hay productos, devolver 0.
    4. No mutar el array original.
🟩 Console.log obligatorios

⭐ Método “pro” sugerido después:
    • reduce */

/* function averagePrice(products) {
    if (products.length === 0) {
        return 0
    }

    let total = 0
    let cantidad = 0
    for (value of products) {
        total += value.precio
        cantidad++
    }

    return total / cantidad
} */

// hizo pensar en returns pero salio
function averagePrice(products) {
    if (products.length === 0) {
        return 0
    }

    let total = [...products].reduce((acc, ele) => {
        let total = acc + ele.precio
        return total
    }, 0)
    return total / products.length

}


console.log(averagePrice([
    { nombre: "Libro", precio: 100 },
    { nombre: "Lapicera", precio: 50 }
]));
// → 75

console.log(averagePrice([]));
// → 0