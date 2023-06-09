function uniTotal(string) {
  let summ = 0

  for (i = 0; i <= string.length - 1; i++) {
    summ = summ + string[i].charCodeAt(0)
  }
  return summ
}

console.log(uniTotal('aaa'))
