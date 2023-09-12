function solution(str, ending){
  const endStr = str.slice(str.length - ending.length, str.length)
  return endStr === ending
}

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))
console.log(solution('samurai', 'ai'))
