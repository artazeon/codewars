function splitByValue(k, elements) {
  let less = []
  let greater = []

  for (let i = 0; i < elements.length; i++) {
    elements[i] < k ? less.push(elements[i]) : greater.push(elements[i])
  }

  return less.concat(greater)
}
console.log(splitByValue(6, [6, 4, 10, 10, 6]), [4, 6, 10, 10, 6])
console.log(splitByValue(5, [1, 3, 5, 7, 6, 4, 2]), [1, 3, 4, 2, 5, 7, 6])
