function sortMyString(S) {
  let partOne = ''
  let partTwo = ''

  S.split('').forEach((el, ind) => {
    ind % 2 === 0 ? (partOne += el) : (partTwo += el)
  })

  return `${partOne} ${partTwo}`
}

console.log(sortMyString('CodeWars'))
console.log(sortMyString("YCOLUE'VREER"))
