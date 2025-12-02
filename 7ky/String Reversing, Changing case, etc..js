function reverseAndMirror(s1, s2) {
  const newS2 = s2
    .split('')
    .reverse()
    .map((el) => {
      if (el === el.toUpperCase()) {
        return el.toLowerCase()
      } else {
        return el.toUpperCase()
      }
    })
    .join('')
  const newS1 = s1
    .split('')
    .reverse()
    .map((el) => {
      if (el === el.toUpperCase()) {
        return el.toLowerCase()
      } else {
        return el.toUpperCase()
      }
    })
    .join('')

  const newS3 = s1
    .split('')

    .map((el) => {
      if (el === el.toUpperCase()) {
        return el.toLowerCase()
      } else {
        return el.toUpperCase()
      }
    })
    .join('')
  return newS2 + '@@@' + newS1 + newS3
}

console.log(reverseAndMirror('FizZ', 'buZZ'), 'zzUB@@@zZIffIZz')
