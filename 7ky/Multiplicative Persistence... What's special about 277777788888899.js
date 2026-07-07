function per(n) {
  const res = []
  let num = n

  while (num > 9) {
    num = [...String(num)].reduce((acc, el) => acc * Number(el), 1)
    console.log(num)
    res.push(num)
  }

  return res
}

console.log(per(69))
