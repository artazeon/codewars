function insertDash(num) {
  const str = num.toString()
  let res = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 != 0 && str[i + 1] % 2 != 0 && i !== str.length - 1) {
      res += str[i] + '-'
    } else {
      res += str[i]
    }
  }

  return res
}

console.log(insertDash(454793))
console.log(insertDash(123456))
