/* 📌 Consigna

Dado un objeto con distintos valores, devolvé un nuevo objeto que indique cuántos valores hay de cada tipo. */

//version pro
const countByType = (obj) => {
    let result = {}

    for (let key in obj) {
        let type = typeof obj[key]

        if (result[type] === undefined) {
            result[type] = 0
        }
        result[type]++
    }


    return result
}

// verison junior 

/* const countByType = (obj) => {
  let result = {
    number: 0,
    string: 0,
    boolean: 0
  }

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result.number++
    } else if (typeof obj[key] === "string") {
      result.string++
    } else if (typeof obj[key] === "boolean") {
      result.boolean++
    }
  }

  return result
}
 */

console.log(
    countByType({
        a: 1,
        b: "hola",
        c: true,
        d: 5,
        e: false,
        f: "chau"
    })
)
// → { number: 2, string: 2, boolean: 2 }