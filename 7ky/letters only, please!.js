function removeChars(s) {
  return s.replace(/[^A-Za-z ]/g, '')
}

console.log(removeChars('.tree1'))
console.log(removeChars("that's a pie&ce o_f p#ie!"))
