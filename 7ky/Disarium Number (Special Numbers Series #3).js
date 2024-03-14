function disariumNumber(n) {
  let str = n.toString()
  let res = 0

  for (let i = 0; i < str.length; i++) {
    res += Math.pow(str[i], i + 1)
  }

  return res.toString() === str ? 'Disarium !!' : 'Not !!'
}

console.log(disariumNumber(564))
