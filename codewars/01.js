
/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0] */


function digitize(num) {
    //code here
    let arr = String(num).split("")
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(Number(arr[i]))
    }
    return result
}
console.log(digitize(35231))