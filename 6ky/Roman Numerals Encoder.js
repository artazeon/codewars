function solution(number) {
  const romaN = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let arabN = ''

  for (let prop in romaN) {
    while (number >= romaN[prop]) {
      arabN = arabN + prop
      number = number - romaN[prop]
    }
  }

  return arabN
}
console.log(solution(2))
console.log(solution(9))
console.log(solution(10))
console.log(solution(2023))
console.log(solution(3999))
