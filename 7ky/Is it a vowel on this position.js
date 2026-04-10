const checkVowel = (string, position) =>
  ['a', 'e', 'i', 'o', 'u'].includes(string[position]?.toLowerCase())

console.log(checkVowel('cat', 1), true)
console.log(checkVowel('cat', 0), false)
console.log(checkVowel('cat', 4), false)
console.log(checkVowel('Amanda', 0))
