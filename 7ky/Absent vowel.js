function absentVowel(x) {
  const vowel = ['a', 'e', 'i', 'o', 'u']
  const arr = x.split('')

  for (let i = 0; i <= arr.length; i++) {
    if (!arr.includes(vowel[i])) {
      return i
    }
  }
}

console.log(absentVowel('John Doe hs seven red pples under his bsket'))
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles'))
