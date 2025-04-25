function orderWord(s) {
  if (!s) {
    return 'Invalid String!'
  }

  return s.split('').sort().join('')
}

console.log(orderWord('Hello, World!'))
console.log(orderWord(null))
