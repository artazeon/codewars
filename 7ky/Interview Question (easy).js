function getStrings(city) {
  const obj = {}

  for (let i = 0; i < city.length; i++) {
    const currentLetter = city[i].toLowerCase('')
    if (currentLetter != ' ') {
      if (obj[currentLetter]) {
        obj[currentLetter] = `${obj[currentLetter]}*`
      } else {
        obj[currentLetter] = '*'
      }
    }
  }

  const str = JSON.stringify(obj).replace(/["]/g, '')

  return str.substring(1, str.length - 1)
}

console.log(getStrings('Chicago'))
console.log(getStrings('Las Vegas'))
;('l:*,a:**,s:**, :*,v:*,e:*,g:*')
;('l:*,a:**,s:**, v:*,e:*,g:*')
