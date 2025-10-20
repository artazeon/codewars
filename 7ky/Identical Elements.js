function duplicateElements(m, n) {
  let flag = false

  m.forEach((el) => {
    if (n.includes(el)) {
      flag = true
    }
  })

  return flag
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]))
console.log(duplicateElements([1, 2, 3, 4, 5], [8, 9]))
