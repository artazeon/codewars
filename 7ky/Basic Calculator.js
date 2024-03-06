function calculate(num1, operation, num2) {
  let res

  switch (operation) {
    case '+':
      res = num1 + num2
      break
    case '-':
      res = num1 - num2
      break
    case '*':
      res = num1 * num2
      break
    case '/':
      res = num1 / num2
      break

    default:
      return null
  }

  return !num2 && operation == '/' ? null : res
}

console.log(calculate(3.2, '+', 8))
console.log(calculate(-3, '/', 0))
console.log(calculate(-3, 'w', 0))
