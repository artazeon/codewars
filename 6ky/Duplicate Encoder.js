function duplicateEncode(word) {
  const arr = word.toLowerCase().split('')
  const obj = {}

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 1
    }
  }

  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) {
      newArr.push('(')
    }
    else {
      newArr.push(')')
    }
  }

  return newArr.join('')
}

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))
