const prevMultOfThree = (n) => {
  let str = n.toString()
  let res = null

  for (let i = 0; str.length >= 1; i++) {
    if (+str % 3 === 0) {
      res = +str
      return res
    }

    str = str.slice(0, -1)
  }

  return res
}

console.log(prevMultOfThree(1244))
console.log(prevMultOfThree(952406))
console.log(prevMultOfThree(36))
