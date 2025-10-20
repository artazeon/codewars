function duplicateElements(m, n) {
  let incl = false

  m.forEach((el) => {
    if (n.includes(el)) {
      incl = true
    }
  })

  return incl
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]))
console.log(duplicateElements([1, 2, 3, 4, 5], [8, 9]))
