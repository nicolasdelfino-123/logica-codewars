function sumDigits(num) {
    // your code here
    let toArr = num.toString().split("")
    console.log('toArr:', toArr);

    let unionNegativo = toArr.slice(0, 2).join("")
    console.log('unionNegativo:', unionNegativo);

    let resto = toArr.slice(2)
    console.log("resto: ", resto)

    let unionToString = unionNegativo.toString()
    console.log("uniontostring", unionToString)

    resto.unshift(unionToString)
    console.log("resto", resto)

    let toNumber = resto.map(Number)

    console.log(toNumber)

    let total = 0
    for (let ele of toNumber) {
        total += ele
    }
    return total
}

let output = sumDigits(-316);
console.log(output); // --> 4
