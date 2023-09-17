function printerError(s) {
  const alphabet = 'abcdefghijklm'
  let err = 0

  for (let i = 0; i < s.length; i++) {
    if (!alphabet.includes(s[i])) {
      err++
    }
  }

  return `${err}/${s.length}`
}

console.log(
  printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
)
console.log(printerError('aaabbbbhaijjjm'))
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))
