function splitTheBill(x) {
  let sum = 0
  for (let key in x) {
    sum += x[key]
  }

  for (let key in x) {
    let num = x[key] - sum / Object.keys(x).length

    if (num % 1 !== 0) {
      x[key] = +num.toFixed(2)
    } else {
      x[key] = +num
    }
  }

  return x
}
console.log(splitTheBill({ A: 20, B: 15, C: 10 }))
console.log(splitTheBill({ A: 40, B: 25, X: 10 }))
console.log(splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 }))
