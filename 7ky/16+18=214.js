function add(num1, num2) {
  const arr1 = num1.toString().split('').reverse()
  const arr2 = num2.toString().split('').reverse()
  const res = []

  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] == undefined) {
      arr1[i] = 0
    }

    if (arr2[i] == undefined) {
      arr2[i] = 0
    }

    res.push(+arr1[i] + +arr2[i])
  }

  return res.reverse().join('')
}

console.log(add(1236, 30977))

