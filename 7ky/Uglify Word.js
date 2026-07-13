function uglifyWord(s) {
  let result = ''
  let flag = 1

  for (const char of s) {
    if (/[a-zA-Z]/.test(char)) {
      if (flag) {
        result += char.toUpperCase()
      } else {
        result += char.toLowerCase()
      }

      flag = flag ? 0 : 1
    } else {
      result += char
      flag = 1
    }
  }

  return result
}

console.log(uglifyWord('AAA'))
console.log(uglifyWord('eeee-ffff-gggg'))
