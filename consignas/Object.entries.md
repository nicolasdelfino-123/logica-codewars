function getEvenValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value % 2 === 0)
  )
}

console.log(getEvenValues({ a: 2, b: 3, c: 6 }))
// → { a: 2, c: 6 }
