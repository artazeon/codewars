function sharedBits(a, b) {
  const binA = a.toString(2)
  const binB = b.toString(2)
  const maxLen = Math.max(binA.length, binB.length)

  const aPadded = binA.padStart(maxLen, '0')
  const bPadded = binB.padStart(maxLen, '0')

  let count = 0
  for (let i = 0; i < maxLen; i++) {
    if (aPadded[i] === '1' && bPadded[i] === '1') {
      count++
    }
  }

  return count >= 2
}

console.log(sharedBits(7, 10))
console.log(sharedBits(7, 15))
console.log(sharedBits(10, 15))
console.log(sharedBits(1, 2))
