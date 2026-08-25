function digitsAverage(input) {
  let arr = input.toString().split('').map(Number)

  while (arr.length > 1) {
    const newArr = []

    for (let i = 0; i < arr.length - 1; i++) {
      newArr.push(Math.ceil((arr[i] + arr[i + 1]) / 2))
    }

    arr = newArr
  }

  return arr[0]
}
console.log(digitsAverage(246))
