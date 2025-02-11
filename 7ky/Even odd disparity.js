function solve(a) {
  let countEven = 0
  let countOdd = 0

  a.forEach((element) => {
    if (typeof element === 'number') {
      element % 2 === 0 ? countEven++ : countOdd++
    }
  })

  return countEven - countOdd
}

console.log(solve([0, 1, 2, 3, 'a']))
