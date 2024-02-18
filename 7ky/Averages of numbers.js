function averages(numbers) {
  const averArr = []

  if (numbers != null) {
    for (let i = 0; i < numbers.length - 1; i++) {
      averArr.push((numbers[i] + numbers[i + 1]) / 2)
    }
  }

  return averArr
}

console.log(averages([1, 3, 5, 1, -10]))
console.log(averages(null))
