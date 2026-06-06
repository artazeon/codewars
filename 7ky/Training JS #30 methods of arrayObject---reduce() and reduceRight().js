function tailAndHead(arr) {
  const sum = arr.map((item, index) => {
    if (index < arr.length - 1) {
      const el = item.toString()
      const nextEl = arr[index + 1].toString()
      return +el[el.length - 1] + +nextEl[0]
    }
  })

  return sum.slice(0, -1).reduce((acc, curr) => acc * curr, 1)
}

console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78]))
console.log(tailAndHead([1, 2, 3, 4, 5]))
