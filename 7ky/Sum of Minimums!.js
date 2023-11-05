function sumOfMinimums(arr) {
  let res = arr.reduce((acc, el) => {
    return acc + Math.min(...el)
  }, 0)

  return res
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
)
