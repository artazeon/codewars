function solve(s) {
  return +s.split(/[a-z]/g).sort((a, b) => b - a)[0]
}

console.log(solve('gh12cdy695m1'))
