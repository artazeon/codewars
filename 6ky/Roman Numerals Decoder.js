function solution(roman) {
  const romaN = {
    M: 1000,

    D: 500,

    C: 100,

    L: 50,
    XL: 40,
    X: 10,

    V: 5,

    I: 1,
  }

  let res = 0

  for (let i = 0; i < roman.length; i++) {
    let curS = roman[i]
    let nextS = roman[i + 1]
    let curVal = romaN[curS]
    let nextVal = romaN[nextS]

    if (nextVal && nextVal > curVal ) {
      res += nextVal - curVal
      i++
    } else {
      res += curVal
    }
  }

  return res
}

console.log(solution('XIX'))
