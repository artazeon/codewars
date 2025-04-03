function strongEnough(earthquake, age) {
  const mult = earthquake.reduce((acc, el) => {
    const sum = el.reduce((accum, item) => accum + item, 0)
    return acc * sum
  }, 1)

  let strength = 1000

  for (let i = 1; i <= age; i++) {
    console.log(strength)

    strength = strength - (strength / 100) * 1
  }

  //return strength
  //return mult
  return strength - mult > 0 ? 'Safe!' : 'Needs Reinforcement!'
}

console.log(
  strongEnough(
    [
      [5, 1, 7],
      [1, 1, 1],
      [4, 1, 2],
    ],
    100
  )
)
