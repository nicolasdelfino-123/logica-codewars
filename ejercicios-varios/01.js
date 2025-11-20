// Write your function here
/* function select(arr, obj) {

    return arr.reduce((acc, ele, index, array) => {
        if (ele in obj) {
            acc[ele]  = obj[ele] 
        }
        return acc 
    }, {a: 1})

} */

/* 🧩 Consigna

Escribe una función llamada copyExistingKeys.
Debe recibir un array de claves y un objeto,
y devolver un nuevo objeto que contenga solo las claves del objeto original que también estén en el array,
pero esta vez, duplicando los valores de cada una. */

const copyExistingKeys = (arr, obj) => {
    return arr.reduce((acc, ele) => {
        if (ele in obj) {
            acc[ele] = obj[ele] * 2


        }
        return acc
    }, {})
}

// le erré en poner bucle for en vez de if directo 

// 🧪 Casos de prueba

// 1️⃣ Caso base
const arr1 = ['x', 'y', 'z'];
const obj1 = { x: 2, y: 5, z: 10, w: 9 };
console.log(copyExistingKeys(arr1, obj1));
// 👉 esperado: { x: 4, y: 10, z: 20 }

// 2️⃣ Caso con una clave que no existe
const arr2 = ['a', 'c', 'e'];
const obj2 = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyExistingKeys(arr2, obj2));
// 👉 esperado: { a: 2, c: 6 }

// 3️⃣ Caso con array vacío
const arr3 = [];
const obj3 = { a: 1, b: 2 };
console.log(copyExistingKeys(arr3, obj3));
// 👉 esperado: {}

// 4️⃣ Caso con objeto vacío
const arr4 = ['a', 'b'];
const obj4 = {};
console.log(copyExistingKeys(arr4, obj4));
// 👉 esperado: {}

// 5️⃣ Caso mixto con algunos duplicados
const arr5 = ['id', 'name', 'price'];
const obj5 = { id: 5, name: 1, stock: 9, price: 10 };
console.log(copyExistingKeys(arr5, obj5));
// 👉 esperado: { id: 10, name: 2, price: 20 }