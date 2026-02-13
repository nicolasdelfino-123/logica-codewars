// EJ1 – Contar cuántas veces aparece el número 3
const arr1 = [3, 5, 3, 7, 3, 9];

const countAppear = (arr) => {
    let counter = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            counter++
        }
    }
    return counter
}



console.log("EJ1:", countAppear([3, 5, 3, 7, 3, 9]), "→ esperado 3");