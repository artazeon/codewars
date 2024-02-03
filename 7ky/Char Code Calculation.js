function calc(x) {
  let total1 = ''
  x.split('').forEach((element) => {
    total1 += element.charCodeAt(0).toString()
  })

  let total2 = total1.replace(/7/g, '1')
  console.log(total1.split(''))
  let sum1 = total1.split('').reduce((acc, element) => {
    return acc + +element
  }, 0)

  let sum2 = total2.split('').reduce((acc, element) => {
    return acc + +element
  }, 0)

  return sum1 - sum2
}

console.log(calc('ABC'))
console.log(calc('aaaaaddddr'))
