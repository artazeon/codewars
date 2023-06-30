function duplicateCount(text) {
  const lTextArr = text.toLowerCase().split('').sort()

  const repeatArr = lTextArr.filter((item) => {
    return lTextArr.indexOf(item) != lTextArr.lastIndexOf(item)
  })

  const resArr = repeatArr.filter((item, index) => {
    return repeatArr.indexOf(item) === index
  })

  return resArr.length
}
console.log(duplicateCount('abcd'))
console.log(duplicateCount('aabbcde'))
console.log(duplicateCount('aindivisibility'))
