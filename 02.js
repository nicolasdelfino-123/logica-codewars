/*🧩 CONSINGA — “Seleccionar propiedades permitidas”

Dado:

un array de claves permitidas,

y un objeto lleno de datos,

Debés crear una función llamada filterKeys que:

Retorne un nuevo objeto que contenga SOLO las propiedades del objeto original cuyas claves estén presentes en el array.

IMPORTANTE:

Si una clave del array no existe en el objeto → se ignora.

No modificás el objeto original.

No uses loops for, solo reduce.  */

function filterKeys(arr, obj) {
    return arr.reduce((acc, ele) => {
        if (ele in obj) {
            acc[ele] = obj[ele]
        }
        return acc

    }, {})
}








console.log(filterKeys(["a", "c"], { a: 1, b: 2, c: 3 }));
// → { a: 1, c: 3 }

console.log(filterKeys(["x", "z"], { a: 1, b: 2, c: 3 }));
// → {}

console.log(filterKeys(["nombre"], { nombre: "Nico", edad: 36 }));
// → { nombre: "Nico" }

console.log(filterKeys(["edad", "ciudad"], { nombre: "Ana", edad: 22 }));
// → { edad: 22 }

console.log(filterKeys([], { a: 1, b: 2 }));
// → {}