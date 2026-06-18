function SumSquares(l) {
  return l.flat(Infinity).reduce((acc, el) => el * el + acc, 0)
}

console.log(SumSquares([10, [[10], 10], [10]]))
