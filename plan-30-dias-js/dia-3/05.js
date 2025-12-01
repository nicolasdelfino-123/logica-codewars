/* 🟩 Consigna profesional
Implementá una función isPalindrome(str) que:
    1. Determine si un string es un palíndromo (se lee igual al derecho y al revés).
    2. Debe ignorar mayúsculas y minúsculas.
    3. Debe ignorar espacios internos.
    4. Si la palabra está vacía, devolvé false.
    5. No podés usar .reverse() directamente.
🟦 Console.log obligatorios
*/


// versión mia
/* function isPalindrome(str) {
    if (str.length === 0) {
        return false
    }
    let comparador = str.trim().toLowerCase().split(" ").join("").toString()

    let result = "";
    let stringLimpio = str.trim().toLowerCase().split("").filter((ele) => ele !== " ")

    for (let i = stringLimpio.length - 1; i >= 0; i--) {
        result += stringLimpio[i]
    }
    if (comparador === result) {
        return true
    } else {
        return false
    }
} */

// version gpt senior

function isPalindrome(str) {
    if (!str.trim()) return false;

    const clean = str.toLowerCase().split("").filter(c => c !== " ").join("");

    let reversed = "";
    for (let i = clean.length - 1; i >= 0; i--) {
        reversed += clean[i];
    }

    return clean === reversed;
}

// con tow pointers tremendo

function isPalindrome(str) {
    if (!str.trim()) return false;

    // 1. Limpiar: minúsculas + sacar espacios
    const clean = str.toLowerCase().replace(/ /g, "");

    // 2. Two pointers
    let left = 0;
    let right = clean.length - 1;

    while (left < right) {
        if (clean[left] !== clean[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("Anita lava la tina"));
// → true

console.log(isPalindrome("Javascript"));
// → false 