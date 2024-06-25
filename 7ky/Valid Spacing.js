function validSpacing(s) {
  if (s.length != s.trim().length) {
    return false
  }
  const newS = s.replace(/\s+/g, ' ')
  return newS.length === s.length
}

console.log(validSpacing('Hello world'))
console.log(validSpacing(' Hello world'))
console.log(validSpacing('Hello world '))
console.log(validSpacing('Hello  world'))
