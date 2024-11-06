function infected(s) {
  const start = s.split('X')
  let end = 0
  let total = 0

  start.forEach((el) => {
    total += el.length
    if (el.includes(1)) {
      end += el.length
    }
  })

  return total ? (100 * end) / total : 0
}

console.log(infected('01000000X000X011X0X'))
console.log(infected('01X000X010X011XX'))
console.log(infected('XXXXX'))
