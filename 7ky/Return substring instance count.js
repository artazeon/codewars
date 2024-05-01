function solution(fullText, searchText) {
  const arr = fullText.split(searchText)
  return arr.length - 1
}

console.log(solution('abcdeb', 'b'))
console.log(solution('abbc', 'bb'))
