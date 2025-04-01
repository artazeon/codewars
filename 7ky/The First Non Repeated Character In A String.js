function firstNonRepeated(s) {
  const arr = s.split('')
  const filtArr = arr.filter(
    (el, ind) => arr.lastIndexOf(el) == arr.indexOf(el)
  )
  return filtArr.length ? filtArr[0] : null
}

console.log(firstNonRepeated('test'))
console.log(firstNonRepeated('nrggoqllsfimikpjhmofpqjhknrttsp'))
