function sumOfIntegersInString(s) {
  const arr = s.replace(/[^0-9]/g, '.').split('.')
  const summ = arr.reduce((acc, el) => acc + +el, 0)
  return summ
}

console.log(
  sumOfIntegersInString('The Great Depression lasted from 1929 to 1939.')
)
console.log(sumOfIntegersInString('2 + 3 ='))
