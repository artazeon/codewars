function dotCalculator(equation) {
  let dots = ''
  const arr = equation.replace(/\/\//, '/').split(' ')
  const res = Math.floor(eval([arr[0].length, arr[1], arr[2].length].join('')))

  for (let i = 0; i < res; i++) {
    dots += '.'
  }

  return dots
}

console.log(dotCalculator('..... + ...............'))
console.log(dotCalculator('..... // ..'))
