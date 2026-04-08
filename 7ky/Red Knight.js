function redKnight(N, P) {
  let rKnightVertical = N ? true : false

  for (let i = 0; i <= P; i += 2) {
    if (i === P) {
      let color = rKnightVertical ? 'Black' : 'White'
      return [color, i]
    }
    P++
    rKnightVertical = !rKnightVertical
  }
}


console.log(redKnight(0, 8), ['White', 16])
console.log(redKnight(0, 7), ['Black', 14])
