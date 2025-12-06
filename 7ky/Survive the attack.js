function hasSurvived(attackers, defenders) {
  let attFrag = 0
  let defFrag = 0

  const max = Math.max(attackers.length, defenders.length)

  for (let i = 0; i < max; i++) {
    const a = attackers[i] ?? 0
    const d = defenders[i] ?? 0

    if (a > d) attFrag++
    if (d > a) defFrag++
  }

  if (attFrag !== defFrag) return defFrag > attFrag

  const sumA = attackers.reduce((s, x) => s + x, 0)
  const sumD = defenders.reduce((s, x) => s + x, 0)

  return sumD >= sumA
}

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false)
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true)
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true)
