function sortByArea(array) {
  return [...array].sort((a, b) => {
    const areaA = Array.isArray(a) ? a[0] * a[1] : Math.PI * a * a
    const areaB = Array.isArray(b) ? b[0] * b[1] : Math.PI * b * b
    return areaA - areaB
  })
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]), [
  [1.342, 3.212],
  1.23,
  [4.23, 6.43],
  3.444,
])
console.log(sortByArea([[2, 5], 6]), [[2, 5], 6])
console.log(sortByArea([]), [])
