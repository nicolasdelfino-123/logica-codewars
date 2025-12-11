/* 3) countLettersIgnoringSpaces
Contar letras sin espacio.
 */


const countLettersIgnoringSpaces = (str) => {

    let result = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            result++
        }
    }
    return result
}



console.log(countLettersIgnoringSpaces("hola mundo"));
// → 9
