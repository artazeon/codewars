function menFromBoys(arr) {
  let sortedArr = Array.from(new Set(arr)).sort((a, b) => b - a)
  let res = []

  sortedArr.forEach((el) => {
    if (el % 2 == 0) res.unshift(el)
    else res.push(el)
  })

  return res
}

console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]))
