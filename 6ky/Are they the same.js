function comp(array1, array2) {

  if (array1 == null || array2 == null ) {
    return false
  }

  const arr1 = array1.sort((a, b) => a - b)
  const arr2 = array2.sort((a, b) => a - b)

  const res = arr1.map((number, index) => {
    return Math.pow(number, 2) === arr2[index];
  });


  return !res.includes(false)
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ]
  )
)
console.log(comp([2, 2, 3], [4, 9, 9]))
console.log(comp([], []))
console.log(comp(null, []))
