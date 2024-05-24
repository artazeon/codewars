function cake(x, y) {
  const criticalPersent = x * 0.7
  const fallCandles = y
    .split('')
    .reduce(
      (acc, el, ind) =>
        ind % 2 === 0 ? acc + el.charCodeAt() : acc + el.charCodeAt() - 96,
      0
    )

  return criticalPersent < fallCandles ? 'Fire!' : 'That was close!'
}

console.log(cake(900, 'abcdef'))
