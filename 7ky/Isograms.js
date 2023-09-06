function isIsogram(str) {

  let newStr = str.toLowerCase()
  console.log(newStr)
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
  console.log(obj)
  return str.length = 0 ? false : res
}

console.log(isIsogram('moOse'))
