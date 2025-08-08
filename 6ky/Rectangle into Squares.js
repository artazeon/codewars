function sqInRect(lng, wdth) {
  if (lng === wdth) return null
  let result = []

  while (wdth != lng) {
    if (lng > wdth) {
      result.push(wdth)
      lng -= wdth
    } else {
      result.push(lng)
      wdth -= lng
    }
  }
  result.push(lng || wdth)

  return result
}

console.log(sqInRect(5, 3))
console.log(sqInRect(20, 14))
