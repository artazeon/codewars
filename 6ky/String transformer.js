function stringTransformer(str) {
  const oldArr = str.split('')
  const newArr = oldArr.map((el) => {
    if (el === el.toUpperCase()) {
      return el.toLowerCase()
    } else {
      return el.toUpperCase()
    }
  })

  return newArr.join('').split(' ').reverse().join(' ')
}
console.log(stringTransformer('Example string'))
