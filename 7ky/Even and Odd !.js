function evenAndOdd(num) {
  const str = num.toString()
  let even = ''
  let odd = ''

  for (let i = 0; i < str.length; i++) {
    str[i] % 2 === 0 ? (even += str[i]) : (odd += str[i])
  }

  return [+even, +odd]
}

console.log(evenAndOdd(126453), [264, 153], `For input 126453`)
