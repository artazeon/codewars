function countArara(n) {
  let answer = ''

  for (let i = 1; i <= n / 2; i++) {
    answer += 'adak '
  }

  return n % 2 ? (answer += 'anane') : answer.trim()
}

console.log(countArara(1))
console.log(countArara(3))
console.log(countArara(8))
console.log(countArara(11))
