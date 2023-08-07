function expandedForm(num) {
  const arr = num.toString().split('')
  let res = ''

  for (let i = 0; i < arr.length; i++) {
    if (i == '0') {
      res += `${arr[i]}${'0'.repeat(arr.length - i - 1)}`
    } else if (arr[i] != '0') {
      res += ` + ${arr[i]}${'0'.repeat(arr.length - i - 1)}`
    }
  }

  return res
}

console.log(expandedForm(12))
console.log(expandedForm(70304))
