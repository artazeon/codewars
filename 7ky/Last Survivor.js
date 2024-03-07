function lastSurvivor(letters, coords) {
  const arr = letters.split('')
  for (let i = 0; i < coords.length; i++) {
    arr.splice(coords[i], 1)
  }

  return arr.join('')
}

console.log(lastSurvivor('abc', [1, 1]))
