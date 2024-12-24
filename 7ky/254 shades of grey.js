function shadesOfGrey(n) {
  let res = []

  for (let i = 1; i <= n && i < 255; i++) {
    const hexadecimalNumber = i.toString(16).padStart(2, '0')
    res.push(`#${hexadecimalNumber}${hexadecimalNumber}${hexadecimalNumber}`)
  }

  return res
}

console.log(shadesOfGrey(2))
console.log(shadesOfGrey(88))
