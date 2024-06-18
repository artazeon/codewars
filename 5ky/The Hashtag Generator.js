function generateHashtag(str) {
  const arr = str.split(/\s+/)
  if (!arr.length || arr.join('').length >= 140 || arr.join('') === '') {
    return false
  }
  const newArr = arr.map((el) => el.charAt(0).toUpperCase() + el.slice(1))
  return `#${newArr.join('')}`
}

console.log(generateHashtag(' '.repeat(200)))
console.log(generateHashtag(''))
console.log(generateHashtag('Do We have A Hashtag'))
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'))
