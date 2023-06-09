function isPythagoreanTriple(integers) {
  const a = Math.pow(integers[0], 2)
  const b = Math.pow(integers[1], 2)
  const c = Math.pow(integers[2], 2)
  return a + b == c || b + c == a || c + a == b
}


console.log( isPythagoreanTriple([3, 4, 5]) )
console.log( isPythagoreanTriple([3, 5, 9]) )