function shorterReverseLonger(a, b) {
  let long = ''
  let short = ''
  a.length >= b.length ? ((long = a), (short = b)) : ((long = b), (short = a))
  return `${short}${long.split('').reverse().join('')}${short}`
}

console.log(shorterReverseLonger('first', 'abcde'))
console.log(shorterReverseLonger('fghi', 'abcde')) // "fghiedcbafghi"
