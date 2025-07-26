function scramble(str, arr) {
  const res = []

  str.split('').forEach((element, index) => {
    res[arr[index]] = element
  })

  return res.join('')
}

console.log(scramble('abcd', [0, 3, 1, 2]))
