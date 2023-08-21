function encryptThis(str) {
  const arr = str.split(' ')

  const encArr = arr.map(el => {
    const elEncArr = el.split('')

    const subArr = elEncArr.map((subEl, ind) => {
      if (ind === 0) {
        subEl = subEl.charCodeAt(0)
      }
      if (ind === 1) {
        elEncArr[elEncArr.length - 1] = subEl
        subEl = el[el.length - 1]
      }
      return subEl
    })
    return subArr.join('')
  })

  return encArr.join(' ')
}

console.log(encryptThis('hello world'))
