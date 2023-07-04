function solution(str) {
  const arr = []

  for (let i = 0; i < str.length; i = i + 2) {
    if (i === str.length-1 && str.length % 2 != 0) {
      arr.push(str[i] + '_')
    } else {
      arr.push(str[i] + str[i + 1])
    }
  }

  return arr
}
console.log(solution('abcdef'))
console.log(solution('abcdefg'))
