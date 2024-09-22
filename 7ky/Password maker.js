function makePassword(phrase) {
  const pass = phrase
    .split(' ')
    .map((el) => {
      return el[0].toLowerCase() == 'i'
        ? 1
        : el[0].toLowerCase() == 'o'
        ? 0
        : el[0].toLowerCase() == 's'
        ? 5
        : el[0]
    })
    .join('')

  return pass
}

console.log(makePassword('Give me liberty or give me death'))
