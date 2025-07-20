function solve(eq) {
  let res = ''
  let temp = ''

  for (let i = 0; i < eq.length; i++) {
    if (!isNaN(+eq[i])) {
      temp += eq[i]
    } else {
      res = eq[i] + temp + res
      temp = ''
    }
  }

  if (temp) {
    res = temp + res
  }
  return eq.split(/([*\+\-\/])/)
}

console.log(solve('100*b/y'), 'y/b*100')
console.log(solve('a+b-c/d*30'), '30*d/c-b+a')
console.log(solve('a*b/c+50'), '50+c/b*a')
