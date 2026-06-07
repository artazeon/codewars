function londonCityHacker(journey) {
  let prevBus = 0

  let sum = journey
    .reduce((acc, el) => {
      if (typeof el === 'string') {
        prevBus = 0
        return acc + 2.4
      }

      if (typeof el === 'number' && prevBus === 1) {
        prevBus = 0
        return acc + 0
      }

      if (typeof el === 'number' && prevBus < 1) {
        prevBus++
        return acc + 1.5
      }

      return acc
    }, 0)
    .toFixed(2)

  return `£${sum}`
}

console.log(londonCityHacker(['Piccadilly', 56, 93, 243, 20, 14]))
