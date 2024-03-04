function maxRot(n) {
  const arr = n.toString().split('')
  const newNumb = []

  for (let i = -1; i < arr.length; i++) {
    let temp = arr.splice(i, 1)[0]
    arr.push(temp)
    newNumb.push(+arr.join(''))
    console.log(newNumb)
  }

  return Math.max(...newNumb)
}

console.log(maxRot(56789))
//console.log(maxRot(828768480))
//expected 287684808 to equal 828768480
