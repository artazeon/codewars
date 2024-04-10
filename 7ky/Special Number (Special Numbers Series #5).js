function specialNumber(n) {
  const str = n.toString()
  let result = 'Special!!'

  for (let i = 0; i < str.length; i++) {
    if (!'012345'.includes(str[i])) {
      result = 'NOT!!'
    }
  }

  return result
}

console.log(specialNumber(25432))
console.log(specialNumber(9))
