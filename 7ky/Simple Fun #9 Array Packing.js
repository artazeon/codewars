function arrayPacking(a) {
  return a.reduce((result, value, i) => result | (value << (i * 8)), 0) >>> 0
}
console.log(arrayPacking([24, 85, 0]), 21784)
