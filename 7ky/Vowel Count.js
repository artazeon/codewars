function getCount(str) {
  const newStr = str.replace(/[aeiou]/gi, '')
  const leng = str.length - newStr.length
  return leng
}


console.log(getCount("abracadabra"))
