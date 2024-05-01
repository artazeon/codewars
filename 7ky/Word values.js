function wordValue(a) {
  const num = a.map((el, ind) => {
    let temp = 0

    for (let i = 0; i < el.length; i++) {
      if (el[i] != ' ') {
        temp += el[i].charCodeAt(0) - 96
      }
    }

    return temp * (ind + 1)
  })

  return num
}

console.log(wordValue(['codewars', 'abc', 'xyz']))
console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc']))
