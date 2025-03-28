function cost(mins) {
  let price = 0

  while (mins > 5) {
    if (price === 0) {
      price += 30
      mins -= 60
    } else {
      price += 10
      mins -= 30
    }
  }

  return price
}

console.log(cost(45), 30)
console.log(cost(63), 30)
console.log(cost(84), 40)
console.log(cost(102), 50)
console.log(cost(273), 100)
