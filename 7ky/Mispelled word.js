function mispelled(a, b) {
  a = a.replace(/\d/g, '')
  b = b.replace(/\d/g, '')

  if (Math.abs(a.length - b.length) > 1) return false

  let i = 0
  let j = 0
  let diff = 0

  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++
      j++
    } else {
      diff++
      if (diff > 1) return false

      if (a.length > b.length) i++
      else if (a.length < b.length) j++
      else {
        i++
        j++
      }
    }
  }

  return true
}

console.log(mispelled('versed', 'v5rsed'), true)
console.log(mispelled('1versed', 'versed'), true)
console.log(mispelled('versed', 'versed1'), true)
console.log
console.log(mispelled('versed', 'aversed'), true)
console.log(mispelled('aaversed', 'versed'), false)
console.log(mispelled('versed', 'aaversed'), false)
