function changeCount(change) {
  const t = change
    .split(' ')
    .filter(Boolean)
    .reduce((sum, coin) => sum + CHANGE[coin], 0)

  return `$${t.toFixed(2)}`
}

console.log(towerCombination(3))
console.log(towerCombination(18))
