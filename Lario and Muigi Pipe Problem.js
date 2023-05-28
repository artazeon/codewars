function pipeFix(numbers) {
  const finishNum = numbers[numbers.length - 1]
  const startNum = numbers[0]
  const arr = []
  for (let i = startNum; i <= finishNum; i++) {
    arr.push(i)
  }
  return arr
}