function humanReadable(seconds) {
  let h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, '0')
  let m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0')
  let s = Math.floor((seconds % 3600) % 60)
    .toString()
    .padStart(2, '0')

  return `${h}:${m}:${s}`
}

console.log(humanReadable(0))
console.log(humanReadable(45296)) // '12:34:56'
