function evenOrOdd(str) {
  const arr = str.split('')
  let even = 0
  let odd = 0

  for (let i = 0; i < str.length; i++) {
    if (arr[i] % 2 === 0) {
      even += +arr[i]
    } else {
      odd += +arr[i]
    }
  }

  return even === odd
    ? 'Even and Odd are the same'
    : even > odd
    ? 'Even is greater than Odd'
    : 'Odd is greater than Even'
}

console.log(evenOrOdd('12'))
console.log(evenOrOdd('123'))
