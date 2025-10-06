function charConcat(string) {
  let result = ''

  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    result += string[i] + string[string.length - 1 - i] + (i + 1)
  }

  return result
}

console.log(charConcat('abcdef'), 'af1be2cd3')
console.log(charConcat('abc!def'), 'af1be2cd3')
