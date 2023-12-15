var palindromeChainLength = function (n) {
  let step = 0
  let str = n.toString()
  let strRev = str.split('').reverse().join('')

  while (str != strRev) 
  {
    str = (+str + +strRev).toString()
    strRev = str.split('').reverse().join('')
    step++
  }

  return step
}

console.log(palindromeChainLength(87))
