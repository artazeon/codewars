function arrayLeaders(numbers) {
  const res = []
  const length = numbers.length

  for (let i = 0; i < length; i++) {
    let temp = numbers.shift()

    if (temp > numbers.reduce((acc, el) => acc + el, 0)) {
      res.push(temp)
    }
  }

  return res
}

console.log(arrayLeaders([16, 17, 4, 3, 5, 2]))
