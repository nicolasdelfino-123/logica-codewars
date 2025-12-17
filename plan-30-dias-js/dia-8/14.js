/* 🟦 Ejercicio 4 — countSheep
Dado un número N, devolver un string: "1 sheep...2 sheep...3 sheep...".

 */

const countSheep = (num) => {
    let result = ""
    let str = "sheep..."
    for (let i = 1; i <= num; i++) {
        result += i + " " + str
    }
    return result
}





console.log(countSheep(3));
// → "1 sheep...2 sheep...3 sheep..."