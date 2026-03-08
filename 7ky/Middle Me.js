const middleMe = (N, X, Y) =>
  N % 2 !== 0 ? X : Y.repeat(N / 2) + X + Y.repeat(N / 2)

console.log(middleMe(18, 'z', '#'))
console.log(middleMe(19, 'z', '#'))
