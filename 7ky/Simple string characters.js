function solve(s) {
  const arr = s.split('')
  const res = [0, 0, 0, 0]

  arr.forEach((element) => {
    if (
      element !== element.toLowerCase() &&
      element === element.toUpperCase()
    ) {
      res[0]++
    } else if (
      element === element.toLowerCase() &&
      element !== element.toUpperCase()
    ) {
      res[1]++
    } else if (!isNaN(element)) {
      res[2]++
    } else {
      res[3]++
    }
  })
  return res
}

console.log(solve("*'&ABCDabcde12345"))
//uppercase letters, lowercase, numbers and special characters.
