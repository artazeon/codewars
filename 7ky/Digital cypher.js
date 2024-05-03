function encode(str, n) {
  const arr = str.split('')
  let key = n.toString()
  return arr.map((el, ind) => el.charCodeAt(0) - 96 + +key[ind % key.length])
}

console.log(encode('scout', 1939))

//[ 20, 12, 18, 30, 21]
