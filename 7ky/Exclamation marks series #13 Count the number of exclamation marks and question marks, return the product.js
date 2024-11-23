function product(string) {
  let exclamation = 0
  let question = 0

  string
    .split('')
    .forEach((element) =>
      element === '!' ? exclamation++ : element === '?' ? question++ : null
    )

  return exclamation * question
}

console.log(product('!!!???'))
