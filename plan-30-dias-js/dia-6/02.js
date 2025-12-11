/* 2) uppercaseWords
Pasar palabras a mayúsculas.

 */

/* const uppercaseWords = (arr) => {
    return [...arr].toUpperCase()
} */

/* const uppercaseWords = (arr) => {

    return arr.reduce((acc, ele) => {
        acc.push(ele.toUpperCase())
        return acc
    }, [])
} */

const uppercaseWords = (arr) => {

    return arr.map((word) => word.toUpperCase())
}

/* const uppercaseWords = (arr) => {

    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].toUpperCase())
    }
    return result
} */

console.log(uppercaseWords(["nico", "js"]));
// → ["NICO","JS"]