function iTri(s) {
  const distance = 140.6

  const swim = 2.4
  const bike = 112

  if (s === 0) return 'Starting Line... Good Luck!'
  if (s >= distance) return "You're done! Stop running!"

  const over = (distance - s).toFixed(2)

  let now = s < swim ? 'Swim' : s < swim + bike ? 'Bike' : 'Run'

  return { [now]: `${over} to go!` }
}

console.log(iTri(36), { Bike: '104.60 to go!' })
console.log(iTri(103.5), { Bike: '37.10 to go!' })
console.log(iTri(0), 'Starting Line... Good Luck!')
console.log(iTri(2), { Swim: '138.60 to go!' })
