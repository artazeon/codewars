function hasUniqueChars(str){
  const arr = str.split('')
  const nArr = arr.filter(el => arr.indexOf(el) != arr.lastIndexOf(el))
  return nArr.length ? false: true
}

console.log(hasUniqueChars("abcdef"))
console.log(hasUniqueChars("++-"))

