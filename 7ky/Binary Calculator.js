function calculate(n1, n2, o) {
  const n1Bin = parseInt(Number(n1), 2)
  const n2Bin = parseInt(Number(n2), 2)

  let result = 0

  switch (o) {
    case 'add':
      result = +n1Bin + +n2Bin
      break
    case 'subtract':
      result = +n1Bin - +n2Bin
      break
    case 'multiply':
      result = +n1Bin * +n2Bin
      break

    default:
      break
  }

  return result.toString(2)
}

console.log(calculate('1', '1', 'add'))
console.log(calculate('1', '1', 'subtract'))
console.log(calculate('10', '10', 'multiply'))
