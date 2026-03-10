function binRota(arr) {
  const result = []

  arr.forEach((el, ind) => {
    if (ind % 2 === 0) {
      el.forEach((item) => result.push(item))
    } else {
      for (let index = el.length - 1; index >= 0; index--) {
        result.push(el[index])
      }
    }
  })

  return result
}

console.log(
  binRota([
    ['Bob', 'Nora'],
    ['Ruby', 'Carl'],
  ]),
)
