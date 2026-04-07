var fibsFizzBuzz = function (n) {
  if (n === 1) return [1]
  const arr = [1, 1]
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }

  return arr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz'
    } else if (num % 3 === 0) {
      return 'Fizz'
    } else if (num % 5 === 0) {
      return 'Buzz'
    }
    return num
  })
}
console.log(fibsFizzBuzz(1), [1])
console.log(fibsFizzBuzz(2), [1, 1])
console.log(fibsFizzBuzz(5), [1, 1, 2, 'Fizz', 'Buzz'])
