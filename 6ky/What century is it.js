function whatCentury(year) {
  const arr = year.split('')
  let cent = 0

  if (arr[2] > 0 || arr[3] > 0) {
    cent = +(arr[0] + arr[1]) + 1
  } else {
    cent = +(arr[0] + arr[1])
  }

  const lastDig = cent % 10
  let okon = ''

  if (lastDig === 1 && cent !== 11) {
    okon = 'st'
  } else if (lastDig === 2 && cent !== 12) {
    okon = 'nd'
  } else if (lastDig === 3 && cent !== 13) {
    okon = 'rd'
  } else {
    okon = 'th'
  }

  return cent + okon
}

console.log(whatCentury('1999'))
console.log(whatCentury('2011'))
console.log(whatCentury('2154'))
console.log(whatCentury('2259'))
console.log(whatCentury('1124'))
console.log(whatCentury('2000'))
