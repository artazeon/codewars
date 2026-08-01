function solve(compasses, gears, tablets) {
  const sets = Math.min(compasses, gears, tablets)

  return sets * 7 + compasses ** 2 + gears ** 2 + tablets ** 2
}
console.log(solve(1, 1, 1))
console.log(solve(2, 1, 1))
