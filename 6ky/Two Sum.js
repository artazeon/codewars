function twoSum(numbers, target) {
  const result = []

  for (let i = 0; i < numbers.length; i++) {
    const second = target - numbers[i]
    const secondIndex = numbers.lastIndexOf(second)

    if (numbers[i] + numbers[secondIndex] === target && numbers.indexOf(numbers[i]) != secondIndex) {
      result.push(numbers.indexOf(numbers[i]))
      result.push(secondIndex)
    }
  }

  return result.slice(0,2)
}

console.log(twoSum([1, 2, 3], 4))
console.log(twoSum([2, 2, 3], 4))
console.log(twoSum([2, 3, 1], 4))
