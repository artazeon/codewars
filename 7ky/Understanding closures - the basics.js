function buildFun(n) {
  let res = []

  for (let i = 0; i < n; i++) {
    res.push(function () {
      console.log(i)
      return i
    })
  }

  return res
}

const fns = buildFun(10)

console.log(fns[0]())
console.log(fns[5]())
console.log(fns[9]())
