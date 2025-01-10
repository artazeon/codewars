function flipNumber(n) {
  let nArr = n.split('')
  let revArr = []

  for (let i = 0; i < n.length; i++) {
    i % 2 != 0 ? revArr.push(nArr.shift()) : revArr.push(nArr.pop())
  }

  return revArr.join('')
}

console.log(flipNumber('543210'))
//"504132"
