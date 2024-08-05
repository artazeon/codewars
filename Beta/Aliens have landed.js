function translateToAlienLanguage(string) {
  const arr = string
    .toLowerCase()
    .split('')
    .map((el) => {
      if (['a', 'e', 'i', 'o', 'u'].includes(el)) {
        return el + el
      } else {
        return el
      }
    })
    .join('')

  const revArr = arr.split(' ').map((el) => {
    return el.split('').reverse().join('')
  })
  return revArr.join(' ')
}

console.log(translateToAlienLanguage('Hello Aliens'))
