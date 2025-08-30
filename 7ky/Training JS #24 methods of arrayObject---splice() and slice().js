function threeInOne(arr) {
  const res = []

  for (let i = 0; i < arr.length; i += 3) {
    const part = arr.slice(i, i + 3)
    res.push(part.reduce((acc, el) => acc + el, 0))
  }

  return res
}
console.log(threeInOne([1, 2, 3, 4, 5, 6]))
