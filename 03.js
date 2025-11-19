/* getLengthOfLongestElement(arr)

Escribí una función que reciba un array de strings y devuelva la longitud del string más largo.

Reglas obligatorias:

Si el array está vacío, devolvé 0.

Tenés que usar reduce.

NO podés usar variables externas.

NO podés usar Infinity.

El acumulador debe representar SIEMPRE “el mejor valor hasta ahora”.

El acumulador tiene que empezar con un dato del propio array.

Podés usar slice o no usarlo, eso lo decidís vos.

El reduce debe devolver un número siempre. */

const getLengthOfLongestElement = (arr) => {
    if (arr.lenght < 1) {
        return 0
    }
    return arr.slice(1).reduce((acc, ele) => ele.length > acc ? ele.length : acc, arr[0].length)
}



console.log(getLengthOfLongestElement(["hi", "sun", "mountain"]));
// → 8  (mountain)

console.log(getLengthOfLongestElement(["car", "book", "pen"]));
// → 4  (book)

console.log(getLengthOfLongestElement([]));
// → 0  (array vacío)
