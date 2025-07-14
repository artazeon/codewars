function noIfsNoButs(a, b) {
  const result = ['smaller than', 'equal to', 'greater than'][
    (a > b) - (a < b) + 1
  ]
  return `${a} is ${result} ${b}`
}

console.log(noIfsNoButs(45, 51))
console.log(noIfsNoButs(51, 51))
console.log(noIfsNoButs(51, 45))
