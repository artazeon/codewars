function hiddenWord(num) {
  const key = {
    a: 6,
    b: 1,
    d: 7,
    e: 4,
    i: 3,
    l: 2,
    m: 9,
    n: 8,
    0: 0,
    t: 5,
  }

  const str = num.toString()
  let result = ''

  for (let i = 0; i < str.length; i++) {
    const letter = Object.keys(key).find(
      (letterKey) => key[letterKey] == str[i],
    )
    result += letter
  }

  return result
}

console.log(hiddenWord(637), 'aid')
console.log(hiddenWord(7415), 'debt')
