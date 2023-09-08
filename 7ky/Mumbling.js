function accum(s) {
	const arr = s.toLowerCase().split('')
  const accArr = arr.map((el, index) => {
    return el.toUpperCase() + el.repeat(index)
  })

  return accArr.join('-')
}


console.log(accum("ZpglnRxqenU"))
