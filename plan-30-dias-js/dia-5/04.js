/* 🟦 Día 5 — Ejercicio 4 (DEFINITIVO)
📌 Nombre
pluckAges
📌 Consigna profesional
Implementá pluckAges(users) que:
    1. Reciba un array de { nombre, edad }.
    2. Devuelva un array con solo las edades.
    3. No muta el original.
🟩 Console.log obligatorios

⭐ Método “pro” sugerido después:
    • map + destructuring */

/* const pluckAges = (arr) => {

    let result = []
    for (let value of arr) {
        result.push(value.edad)
    }
    return result
} */


const pluckAges = (arr) => {

    return arr.map((ele) => ele.edad)
}

console.log(pluckAges([
    { nombre: "Nico", edad: 37 },
    { nombre: "Ana", edad: 15 }
]));
// → [37, 15]