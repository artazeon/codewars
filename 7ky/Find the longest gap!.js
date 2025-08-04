function gap(num) {
  const bin = num.toString(2).split('1')
  bin.pop()
  bin.shift()
  return bin.reduce((max, curr) => Math.max(max, curr.length), 0)
}

console.log(gap(9))
console.log(gap(529))
console.log(gap(20))
