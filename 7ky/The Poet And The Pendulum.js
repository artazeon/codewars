function pendulum(values) {
  const sortedArr = values.sort((a, b) => a - b)

  let result = []

  sortedArr.forEach((el, ind) => {
    if (ind % 2 == 0) result.push(el)
    if (ind % 2 != 0) result.unshift(el)
  })
  return result
}

console.log(pendulum([4, 10, 9]))
console.log(pendulum([11, -16, -18, 13, -11, -12, 3, 18]))
