function capital(capitals) {
  const result = capitals.map((el) => {
    const key = Object.keys(el)[0]
    const region = el[key]
    const capital = el.capital

    return `The capital of ${region} is ${capital}`
  })

  return result
}

console.log(capital([{ state: 'Maine', capital: 'Augusta' }]))
console.log(capital([{ country: 'Spain', capital: 'Madrid' }]))
console.log(
  capital([
    { state: 'Maine', capital: 'Augusta' },
    { country: 'Spain', capital: 'Madrid' },
  ])
)
