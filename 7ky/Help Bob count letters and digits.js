function countLettersAndDigits(input) {
  let count = 0

  for (let i = 0; i < input.length; i++)
    if (/[a-zA-Z\d]/.test(input[i])) {
      count++
    }
  return count
}

console.log(countLettersAndDigits('hel2!lo'))
console.log(countLettersAndDigits('n!!_ice!!123'))
