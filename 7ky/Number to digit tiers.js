function createArrayOfTiers(num) {
  const str = num.toString()
  let res = []
  for (let i = 1; i <= str.length; i++) {
    res.push(str.slice(0, i))
  }
  return res
}
console.log(createArrayOfTiers(420))
