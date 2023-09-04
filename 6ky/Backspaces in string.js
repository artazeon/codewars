function cleanString(s) {
  const arr = s.split('')
  while (arr.includes('#')) {
    const index = arr.indexOf('#')
    console.log(arr)
    if (index === 0) {
      arr.shift()
    }
    else if (index > -1) {
      arr.splice(index - 1, 2)
    }
  }
  return arr.join('')
}

console.log(cleanString('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##'))
