function maxGap(numbers) {
  numbers.sort((a, b) => a - b)

  let res = 0

  for (let i = 0; i <= numbers.length; i++) {
    let temp = numbers[i + 1] - numbers[i]
    if (temp > res) {
      res = temp
    }
  }
  return res
}

console.log(maxGap([13, 10, 2, 9, 5]))
