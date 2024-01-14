function sum() {
  let sum = 0
  for (let key in arguments) {
    sum += arguments[key]
  }
  return sum
}
console.log(sum(12, 1, 1, 1, 1, 1, 1))
