function replaceNth(text, n, oldValue, newValue) {
  let count = 0

  const arr = text.split('')

  const replaceArr = arr.map((el) => {
    if (el === oldValue) {
      count++
    }

    if (count === n && el === oldValue) {
      count = 0
      return newValue
    } else {
      return el
    }
  })

  return replaceArr.join('')
}

console.log(
  replaceNth('Vader said: No, I am your father!', 2, 'a', 'o'),
  'Vader soid: No, I am your fother!'
)
