function addLetters(...letters) {
  if (letters.length === 0 ) {
    return 'z'
  }
  let sum = letters.reduce((acc, el) => acc + el.charCodeAt(0)-96, 0)


  if (sum > 26) {
    for (let i = 0; sum > 26; i--) {
      sum = sum - 26
    }
  }


  return String.fromCharCode(sum+64).toLowerCase()
}

console.log(addLetters('a', 'b', 'c'))
console.log(addLetters('z', 'a'))
console.log(addLetters('z'))
console.log(addLetters())
