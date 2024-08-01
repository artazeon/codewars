function bingo(a) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const bingo = [2, 9, 14, 7, 15]

  for (let i = 0; i < bingo.length; i++) {
    if (!a.includes(bingo[i])) {
      return 'LOSE'
    }
  }

  return 'BINGO'
}

console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]))
console.log(bingo([21, 13, 2, 8, 5, 14, 8, 15, 9, 10]))
