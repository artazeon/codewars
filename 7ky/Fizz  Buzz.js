function solution(number) {
  let res = [0, 0, 0]

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 !== 0) res[0]++
    if (i % 5 === 0 && i % 3 !== 0) res[1]++
    if (i % 3 === 0 && i % 5 === 0) res[2]++
  }

  return res
}

console.log(solution(20))
console.log(solution(2))
