function catchSignChange(arr) {
  let count = 0
  let sign = Math.sign(arr[0])
  let prevSign = Math.sign(arr[0])

  arr.forEach((element) => {
    let sign = Math.sign(element)

    if (sign == 0) {
      sign = 1
    }

    if (prevSign == 0) {
      prevSign = 1
    }

    if (sign != prevSign) {
      count++
    }

    prevSign = Math.sign(element)
  })

  return count
}

console.log(catchSignChange([1, -3, -4, 0, 5]))
console.log(catchSignChange([-7, -7, 7, 0]))
console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77]))
