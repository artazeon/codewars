function solve(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const str = s.split('').sort().join('')
  return alphabet.includes(str)
}

console.log(solve('abc'))
console.log(solve('abd'))
console.log(solve('dabc'))
