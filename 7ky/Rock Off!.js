function solve(a, b) {
  let resA = 0
  let resB = 0

  a.forEach((el, ind) => {
    if (el > b[ind]) {
      resA++
    }
    if (el < b[ind]) {
      resB++
    }
  })

  const text =
    resA === resB
      ? `that looks like a "draw"! Rock on!`
      : resA > resB
        ? `Alice made "Kurt" proud!`
        : `Bob made "Jeff" proud!`

  return `${resA}, ${resB}: ${text}`
}

console.log(
  solve([47, 7, 2], [47, 7, 2]),
  '0, 0: that looks like a "draw"! Rock on!',
)

console.log(solve([47, 67, 22], [26, 47, 12]), '3, 0: Alice made "Kurt" proud!')
