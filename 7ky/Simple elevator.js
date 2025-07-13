function goto(level, button) {
  const validLevels = [0, 1, 2, 3]
  const validButtons = ['0', '1', '2', '3']

  if (
    typeof level !== 'number' ||
    !validLevels.includes(level) ||
    typeof button !== 'string' ||
    !validButtons.includes(button)
  ) {
    return 0
  }

  const target = Number(button)
  return target - level
}

console.log(goto(2, '4'))
console.log(goto(4, 0))
console.log(goto(4, undefined))
console.log(goto(3, 0))
console.log(goto(0, undefined))
console.log(goto(0, 2))
console.log(goto([], 2))
console.log(goto(3, {}))
console.log(goto(0, 0))
console.log(goto(0, undefined))
