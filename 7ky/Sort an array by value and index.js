function sortByValueAndIndex(array) {
  const valIndArr = array.map((el, ind) => ({ val: el, index: ind + 1 }))
  const sortedArr = valIndArr.sort((a, b) => a.val * a.index - b.val * b.index)
  const res = sortedArr.map((el) => el.val)

  return res
}

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]))
console.log(
  sortByValueAndIndex([-8, -21, 10, -2, 3, -11, -8, 25, 2, 22, -16, -17, -4])
)
//[ -17, -16, -11, -4, -21, -8, -2, -8, 3, 2, 10, 25, 22 ]
//[ -17, -16, -11, -8, -4, -21, -8, -2, 3, 2, 10, 25, 22 ]
