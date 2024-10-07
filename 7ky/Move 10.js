function moveTen(s) {
  const arr = s.split('')
  const moveArr = arr.map((el) => {
    const moveChCode = el.charCodeAt(0) + 10
    return moveChCode > 122
      ? String.fromCharCode(moveChCode - 122 + 96)
      : String.fromCharCode(moveChCode)
  })
  return moveArr.join('')
}

console.log(moveTen('testcase'))
console.log(moveTen('comovears'))
console.log(moveTen('exampletesthere'))
