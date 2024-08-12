function isItLetter(character) {
  const regex = /[a-zA-Z]/
  return regex.test(character)
}

console.log(isItLetter('z'))
console.log(isItLetter('Z'))
console.log(isItLetter('['))
