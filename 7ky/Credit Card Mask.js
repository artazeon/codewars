function maskify(cc) {
  const arrCc = cc.split('')

  const maskArr = arrCc.map((el, index) => {
    if (index < arrCc.length-4) {
      
      return '#'
    }
    else {
      return el
    }
  })
  return maskArr.join('')
}


console.log(maskify('4556364607935616'))
console.log(maskify('11111'))
console.log(maskify('1111'))

