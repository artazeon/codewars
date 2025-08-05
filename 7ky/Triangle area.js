function tArea(tStr) {
  const n = tStr.split('\n').length - 1
  const a = n - 2
  const s = (1 / 2) * a * a
  return s
}

console.log(tArea('\n.\n. .\n'))
console.log(tArea('\n.\n. .\n. . .\n'))
console.log(
  tArea(
    '\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'
  )
)
