function snail(column, day, night) {
  let currentStep = 0
  let count = 0

  for (let i = 0; currentStep < column; i++) {
    currentStep = currentStep + day
    count++
    if (currentStep >= column) {
      return count
    } else {
      currentStep = currentStep - night
    }
  }
  return count
}

console.log(snail(3, 2, 1))
console.log(snail(10, 3, 1))
console.log(snail(10, 3, 2))
