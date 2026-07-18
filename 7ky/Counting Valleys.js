function countingValleys(s) {
  let level = 0
  let valleys = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'U') {
      level++
      if (level === 0) {
        valleys++
      }
    }
    if (s[i] === 'D') {
      level--
    }
  }
  return valleys
}

console.log(countingValleys('UFFDDFDUDFUFU'))
