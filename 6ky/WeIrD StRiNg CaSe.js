function toWeirdCase(string) {
  const arr = string.split(' ')

  const newArr = arr.map((el, ind) => {
    let newEl = ''

    for (let i = 0; i < el.length; i++) {
      console.log(el.charAt(i))

      if (i % 2 === 0) {
        newEl += el.charAt(i).toUpperCase()
      } else {
        newEl += el.charAt(i)
      }
    }
    return newEl
  })

  return newArr.join(' ')
}

console.log(toWeirdCase('This is a test'))
