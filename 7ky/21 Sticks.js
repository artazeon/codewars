function makeMove(sticks) {
  const move = sticks % 4
  return move === 0 ? 1 : move
}

console.log(makeMove(21))
console.log(makeMove(21))
