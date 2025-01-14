function sortVowels(s) {
  if (typeof s != 'string') return ``
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const arr = s
    .split('')
    .map((el) => (vowels.includes(el.toLowerCase()) ? `|${el}` : `${el}|`))
  return arr.join('\n')
}

console.log(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|')
