function isDivisible(...arg) {
  let res = true
  arg.forEach((el) => {
    if (arg[0] % el != 0) {
      res = false
    }
  })

  return res
}

console.log(isDivisible(3, 3, 4))
console.log(isDivisible(12, 3, 4))
