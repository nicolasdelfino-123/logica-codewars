/* 🟦 Ejercicio de Lógica (Nivel controlado, ideal para abrir el día)

Consigna:
Tenés un array de objetos con { nombre, edad }.
Implementá una función:

👉 getMinors(users)

Que devuelva solo los usuarios menores o iguales a 17, sin mutar el array original.

Pistas (para que no te frustres):

Usá un for…of simple.

Creá un array result y hacé push.

No uses filter todavía, a menos que quieras hacer la versión “pro” después.

Ejemplo final esperado:
*/

/* function getMinors(arr) {
    let result = []

    for (let value of arr) {
        if (value.edad <= 17) {
            result.push(value)
        }
    }
    return result
} */
function getMinors(arr) {


    return arr.filter(({ edad }) => edad <= 17)
}


console.log(getMinors([
    { nombre: "Ana", edad: 12 },
    { nombre: "Luis", edad: 19 },
    { nombre: "Mia", edad: 17 }
]))
/* [
  { nombre: "Ana", edad: 12 },
  { nombre: "Mia", edad: 17 }
]  */