function circleOfNumbers(n, firstNumber) {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i)
  }

  const part1 = arr.slice(0, n / 2)
  const part2 = arr.slice(n / 2)

  const fIndex = arr.findIndex((el) => el === firstNumber)

  if (fIndex < n / 2) {
    return part2[fIndex]
  } else {
    return part1[fIndex - n / 2]
  }
}

console.log(circleOfNumbers(10, 2)) //7
console.log(circleOfNumbers(10, 7)) //2
console.log(circleOfNumbers(4, 1)) //3
console.log(circleOfNumbers(6, 3)) //0
console.log(circleOfNumbers(844, 620)) //198
