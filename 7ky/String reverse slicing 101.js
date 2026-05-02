function reverseSlice(str) {
  const revArr = str.split('').reverse()
  let result = []

  for (let i = 0; i < revArr.length; i++) {
    const slice = revArr.slice(i).join('')
    result.push(slice)
  }

  return result
}

console.log(reverseSlice('123'))
console.log(reverseSlice('abcde'))
