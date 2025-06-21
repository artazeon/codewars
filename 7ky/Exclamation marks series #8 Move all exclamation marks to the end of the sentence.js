function remove(string) {
  const witoutE = string.split('!').join('')

  const length = string.length - witoutE.length
  return `${witoutE}${'!'.repeat(length)}`
}
console.log(remove('Hi! Hi!'))
console.log(remove('Hi! Hi!! Hi!'))
