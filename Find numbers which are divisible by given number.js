function divisibleBy(numbers, divisor) {
  return numbers.filter((i) => Number.isInteger(i / divisor))
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))
