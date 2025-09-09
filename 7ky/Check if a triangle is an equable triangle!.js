function equableTriangle(a, b, c) {
  const P = a + b + c
  const halfS = P / 2
  const S = Math.sqrt(halfS * (halfS - a) * (halfS - b) * (halfS - c))

  return P === S
}

console.log(equableTriangle(5, 12, 13), true)
console.log(equableTriangle(2, 3, 4), false)
console.log(equableTriangle(6, 8, 10), true)
console.log(equableTriangle(7, 15, 20), true)
console.log(equableTriangle(17, 17, 30), false)
console.log(equableTriangle(7, 10, 12), false)
console.log(equableTriangle(6, 11, 12), false)
console.log(equableTriangle(25, 25, 45), false)
console.log(equableTriangle(13, 37, 30), false)
console.log(equableTriangle(6, 25, 29), true)
console.log(equableTriangle(10, 11, 18), false)
console.log(equableTriangle(73, 9, 80), false)
console.log(equableTriangle(12, 35, 37), false)
console.log(equableTriangle(120, 109, 13), false)
console.log(equableTriangle(9, 10, 17), true)
