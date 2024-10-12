function sortDict(dict) {
  const arr = Object.keys(dict).map((key) => [
    isNaN(+key) ? key : +key,
    dict[key],
  ])

  arr.sort((a, b) => b[1] - a[1])

  return arr
}

console.log(sortDict({ 1: 2, 2: 4, 3: 6 }))
console.log(sortDict({ aldo: 6, boris: 2, igor: 6 }))
