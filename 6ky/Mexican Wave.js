function wave(str) {
  const res = []
  for (let i = 0; i < str.length; i++) {
    let arr = str.split('')
    if (arr[i] != ' ') {
      arr[i] = arr[i].toUpperCase()
      res.push(arr.join(''))
    }
  }
  return res
}

console.log(wave('hello'))
console.log(wave('codewars'))
console.log(wave('two words'))
