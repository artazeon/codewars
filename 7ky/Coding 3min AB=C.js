function findAB(numbers, c) {
  for (let i = 0; i < numbers.length; i++) {
    let a = numbers[i]

    for (let j = 0; j < numbers.length; j++) {
      if (a * numbers[j] === c && j !== i) {
        return [a, numbers[j]]
      }
    }
  }

  return null
}

console.log(findAB([1, 2, 3], 3))
console.log(findAB([1, 2, 3], 7))
