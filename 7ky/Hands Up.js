const getPositions = (s) => {
  const result = [0, 0, 0]

  for (let i = 0; i < s; i++) {
    return [s % 3, Math.floor(s / 3) % 3, Math.floor(s / 9) % 3]
  }

  return result
}

console.log(getPositions(98))
