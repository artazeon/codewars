function sillycase(silly) {
  const arr = silly.split('')
  const res = arr.map((el, ind) =>
    ind <= (arr.length - 1) / 2 ? el.toLowerCase() : el.toUpperCase()
  )

  return res.join('')
}

console.log(sillycase('brian'))
console.log(sillycase('foobar'))
