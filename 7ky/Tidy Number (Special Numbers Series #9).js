function tidyNumber(n) {
  const str = n.toString()
  for (let i = 0; i <= str.length; i++) {
    if (str[i] > str[i + 1]) return false
  }

  return true
}

console.log(tidyNumber(2335))
console.log(tidyNumber(9672))
