const ultimateReverse = (s) => {
  const lengths = s.map((el) => el.length)
  const reversed = s.join('').split('').reverse().join('')
  const result = []
  let i = 0

  for (const len of lengths) {
    result.push(reversed.slice(i, i + len))
    i += len
  }

  return result
}

console.log(
  ultimateReverse(['I', 'like', 'big', 'butts', 'and', 'I', 'cannot', 'lie!']),
  ['!', 'eilt', 'onn', 'acIdn', 'ast', 't', 'ubgibe', 'kilI']
)
