function spinAround(turns) {
  const r = turns.filter((el) => el === 'right')
  const l = turns.filter((el) => el === 'left')

  return Math.abs(Math.trunc((r.length - l.length) / 4))
}

console.log(spinAround(['right', 'right', 'right', 'right', 'left', 'right']))
console.log(spinAround(['left', 'right', 'left', 'right']))
