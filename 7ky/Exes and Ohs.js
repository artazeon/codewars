function XO(str) {
  str = str.toLowerCase()
  const arr = str.split('')

  const obj = {
    x: 0,
    o: 0,
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 1
    }
  }

  const x = obj.x
  const o = obj.o

  return x === o
}
console.log(XO('xxOo'))
