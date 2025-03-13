function paul(x) {
  const obj = {
    kata: 5,
    'Petes kata': 10,
    life: 0,
    eating: 1,
  }

  const score = x.reduce((acc, el) => obj[el] + acc, 0)

  return score < 40
    ? 'Super happy!'
    : score < 70 && score >= 40
    ? 'Happy!'
    : score < 100 && score >= 70
    ? 'Sad!'
    : 'Miserable!'
}
console.log(paul(['life', 'eating', 'life']))
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']))
