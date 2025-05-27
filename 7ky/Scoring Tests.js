function scoreTest(str, right, omit, wrong) {
  const fRight = str.filter((el) => el === 0).length * right
  const fOmit = str.filter((el) => el === 1).length * omit
  const fWrong = str.filter((el) => el === 2).length * wrong

  return fRight + fOmit - fWrong
}

console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1))
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2))
