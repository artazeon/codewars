function solve(str) {
  let indexSpace = []
  let index = str.indexOf(' ')

  while (index !== -1) {
    indexSpace.push(index)
    index = str.indexOf(' ', index + 1)
  }

  let revStr = str.replace(/\s/g, '').split('').reverse().join('')

  for (let i = 0; i < indexSpace.length; i++) {
    revStr = revStr.slice(0, indexSpace[i]) + ' ' + revStr.slice(indexSpace[i])
  }

  return revStr
}

console.log(solve('your code'))
