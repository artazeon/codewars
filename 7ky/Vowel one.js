function vowelOne(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      res += 1
    } else {
      res += 0
    }
  }

  return res
}

console.log(vowelOne('Abceios'))
console.log(vowelOne('aeiou, abc'))
