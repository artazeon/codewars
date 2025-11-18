function decodeResistorColors(bands) {
  const resistorColorCodes = {
    colors: {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      gray: 8,
      grey: 8,
      white: 9,
    },
    tolerance: {
      gold: 5,
      silver: 10,
    },
  }

  const arr = bands.split(' ')

  const a = resistorColorCodes.colors[arr[0]]
  const b = resistorColorCodes.colors[arr[1]]
  const multiplier = Math.pow(10, resistorColorCodes.colors[arr[2]])
  const tolerance = resistorColorCodes.tolerance[arr[3]] ?? 20
  const value = (a * 10 + b) * multiplier

  let formatted = ''
  if (value < 1000) {
    formatted = `${value} ohms`
  } else if (value < 1_000_000) {
    formatted = `${value / 1000}k ohms`
  } else {
    formatted = `${value / 1_000_000}M ohms`
  }

  return `${formatted}, ${tolerance}%`
}

console.log(decodeResistorColors('yellow violet black'))
