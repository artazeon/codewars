function minimumSteps(numbers, value) {
  numbers.sort((a, b) => a - b)
  let sum = numbers[0]
  let count = 0
  for (let i = 0; sum < value; i++) {
    sum += numbers[i + 1]
    count++
  }

  return count
}

console.log(minimumSteps([1, 2, 3, 9, 10, 12], 6))
