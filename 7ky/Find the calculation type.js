function calcType(a, b, res) {
  const operation = {
    addition: '+',
    subtraction: '-',
    multiplication: '*',
    division: '/',
  }

  let result = ''

  for (let key in operation) {
    let expression = `${a} ${operation[key]} ${b}`

    if (eval(expression) === res) {
      result = key
    }
  }

  return result
}

console.log(calcType(1, 2, 3))
