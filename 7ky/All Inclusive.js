function containAllRots(strng, arr) {
  console.log(strng, arr)

  for (let i = 0; i < strng.length; i++) {
    let firstChar = strng.charAt(0)
    strng = strng.substring(1) + firstChar
    if (!arr.includes(strng)) {
      return false
    }
  }

  return arr.length > 0
}

console.log(containAllRots('', []))
console.log(containAllRots('', ['bsjq', 'qbsj']))
