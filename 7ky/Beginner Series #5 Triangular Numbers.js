function isTriangular(t) {
  let res = 0

  for (let i = 0; res < t; i++) {
    res += i + 1
  }

  return res === t
}

console.log(isTriangular(1))
console.log(isTriangular(3))
console.log(isTriangular(6))
console.log(isTriangular(7))
