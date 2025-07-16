function solve(s, k) {
  let arr = s.split('')
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for (let char of alphabet) {
    for (let i = 0; i < arr.length && k > 0; i++) {
      if (arr[i] === char) {
        arr.splice(i, 1)
        i--
        k--
      }
    }
    if (k === 0) break
  }

  return arr.join('')
}

console.log(solve('abracadabra', 2))
