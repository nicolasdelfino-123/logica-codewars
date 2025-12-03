/* 🟦 Día 5 — Ejercicio 1 (DEFINITIVO)
📌 Nombre
filterAdults
📌 Consigna profesional
Implementá filterAdults(users) que:
    1. Reciba un array de objetos { nombre, edad }.
    2. Devuelva un array con solo los usuarios mayores o iguales a 18.
    3. No muta el array original.
🟩 Console.log obligatorios

⭐ Método “pro” sugerido después:
    • filter + destructuring */

// version mia
/* const filterAdults = (arr) => {

    let result = []
    for (let valor of arr) {
        if (valor.edad > 18) {
            result.push(valor)
        }

    }
    return result



} */

// version pro con destructuring y filter

const filterAdults = (users) => {
    return users.filter(({ edad }) => edad >= 18);
};





console.log(filterAdults([
    { nombre: "Nico", edad: 37 },
    { nombre: "Ana", edad: 15 }
]));
// → [ { nombre:"Nico", edad:37 } ]