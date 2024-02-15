function automorphic(n) {
  const squareString = Math.pow(n, 2).toString()
  const nString = n.toString()
  const ending = squareString.slice(-nString.length)
  return +ending === n ? 'Automorphic' : 'Not!!'
}

console.log(automorphic(1))
console.log(automorphic(3))
console.log(automorphic(25))
