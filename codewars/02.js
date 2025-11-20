/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */
/* 
function removeEveryOther(arr) {
    //your code here
    let result = []
    let index = 0
    for (let ele of arr) {
        if (index % 2 === 0) {
            result.push(ele)
        }
        index++
    }
    return result

} */

/*     function removeEveryOther(arr){
  //your code here
  return arr.filter((_,index) => index % 2 === 0)
}
 */

/* const removeEveryOther = arr => arr.filter((_, i) => !(i % 2)); */
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))