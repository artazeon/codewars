function sumCubes(n) {
  let cubesSum = 0
  for (let i = 1; i <= n; i++) {
    cubesSum += Math.pow(i, 3)
  }
  return cubesSum
}

console.log(sumCubes(2))
console.log(sumCubes(3))
