function vowel2index(str) {
  const result = str
    .split('')
    .map((el, ind) =>
      ['a', 'e', 'i', 'o', 'u'].includes(el.toLowerCase()) ? ind + 1 : el
    )

  return result.join('')
}

console.log(vowel2index('this is my string'))
