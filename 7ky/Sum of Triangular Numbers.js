function sumTriangularNumbers(n) {
  const arrTriangularNumbers = []

  for (let i = 1; i <= n; i++) {
    arrTriangularNumbers.push(i * (i + 1) / 2)
  }

  return arrTriangularNumbers.reduce((ac, el)=>{return el+ac},0)
}

console.log(sumTriangularNumbers(6))
