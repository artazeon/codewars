function isIsogram(str) {
  let newStr = str.toLowerCase()
  const obj = {}
  let res = true

  for (let i = 0; i < newStr.length; i++) {
    
    if (obj[newStr[i]]) {
      obj[newStr[i]]++
      res = false
    } else {
      obj[newStr[i]] = 1
    }
  }
  return res
}

console.log(isIsogram('moOse'))
