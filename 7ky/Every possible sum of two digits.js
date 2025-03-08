function digits(num) {
  let str = num.toString()

  let result = []

  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      result.push(+str[i] + +str[j])
    }
  }

  return result
}

console.log(digits(156))
