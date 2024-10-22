const findAll = (array, n) => {
  return array
    .map((element, index) => {
      return element === n ? index : -1
    })
    .filter((index) => index !== -1)
}

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3))
