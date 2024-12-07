function alphabetic(s) {
  const sortedS = s.split('').sort().join('')
  return sortedS === s
}

console.log(alphabetic('door'))
console.log(alphabetic('codewars'))
