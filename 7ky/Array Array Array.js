function explode(x) {
  let score = 0
  if (x.every((el) => typeof el != 'number')) return 'Void!'
  if (typeof x[0] === 'number') score += x[0]
  if (typeof x[1] === 'number') score += x[1]

  return score === 0 ? [] : Array.from({ length: score }, () => [...x])
}

console.log(explode([9, 3]))
console.log(explode(['a', 3]))
console.log(explode(['a', 0]))
console.log(explode(['a', 'b']))
