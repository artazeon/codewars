function battle(x, y) {
  const getStrength = (str) =>
    [...str].reduce((sum, char) => sum + char.charCodeAt() - 64, 0)

  const strengthX = getStrength(x)
  const strengthY = getStrength(y)

  return strengthX === strengthY ? 'Tie!' : strengthX > strengthY ? x : y
}
console.log(battle('AAA', 'Z'))
