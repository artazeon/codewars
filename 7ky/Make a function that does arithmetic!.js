function arithmetic(a, b, operator) {
  let res = 0
  switch (operator) {
    case 'add':
      res = a + b
      break
    case 'subtract':
      res = a - b
      break

    case 'multiply':
      res = a * b

      break
    case 'divide':
      res = a / b
      break
  }

  return res
}

console.log(arithmetic(1, 2, 'add'))
console.log(arithmetic(8, 2, 'subtract'))
console.log(arithmetic(5, 2, 'multiply'))
console.log(arithmetic(8, 2, 'divide'))
