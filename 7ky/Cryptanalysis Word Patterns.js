function wordPattern(word) {
  const startArr = word.toLowerCase().split('')
  const obj = {}
  let count = 0
  const resArr = []

  for (let char of startArr) {
    if (!(char in obj)) {
      obj[char] = count++
    }
    resArr.push(obj[char])
  }

  return resArr.join('.')
}

console.log(wordPattern('heLlo'))
console.log(wordPattern('Hippopotomonstrosesquippedaliophobia'))
