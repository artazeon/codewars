function reverseIt(data) {
  const type = typeof data

  switch (type) {
    case 'string':
      return data.split('').reverse().join('')
      break
    case 'number':
      return Number(data.toString().split('').reverse().join(''))
      break
    default:
      return data
  }
}

console.log(reverseIt('Hello'))
console.log(reverseIt(314159))
console.log(reverseIt('314159'))
console.log(reverseIt([]))
