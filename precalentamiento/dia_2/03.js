// EJ3 – Contar vocales
const str1 = "programacion";
// TU CODIGO

function vocales(str) {
    let counter = 0
    let vocales = 'aeiou'

    for (let i = 0; i < str.length; i++) {
        if (vocales.includes(str[i])) {
            counter++
        }
    }
    return counter
}


console.log("EJ3:", vocales("programacion"), "→ esperado 5");