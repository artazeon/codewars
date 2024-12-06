function mergeArrays(a, b) {
  let length = Math.max(a.length, b.length)
  let merge = []

  for (let i = 0; i < length; i++) {
    merge.push(a[i], b[i])
  }

  const result = merge.filter((el) => el != undefined)
  return result
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']))
console.log(
  mergeArrays(
    [23, 55, 55, 72, 16, 48, 33, 48, 89],
    ['r', 'x', 'n', 'a', 'b', 'd', 'c', 'd', 'n', 'k', 'm']
  )
)
