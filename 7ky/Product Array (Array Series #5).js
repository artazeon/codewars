function productArray(numbers) {
  const res = []

  for (let i = 0; i < numbers.length; i++) {
    const temp = numbers.reduce((acc, el) => acc * el)
    res.push(temp / numbers[i])
  }
  return res
}

console.log(productArray([13, 10, 5, 2, 9]))
//[900,1170,2340,5850,1300]
