function isTuringEquation(s) {
  const [a, b, c] = s.split(/[+=]/)

  const revA = +a.split('').reverse().join('')
  const revB = +b.split('').reverse().join('')
  const revC = +c.split('').reverse().join('')

  return revA + revB === revC
}
console.log(isTuringEquation('73+42=16'))
