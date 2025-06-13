function sumFactorial(arr) {
  const res = arr.reduce((acc, el) => {
    let fact = 1

    for (let i = 1; i <= el; i++) {
      fact *= i
    }

    return acc + fact
  }, 0)
  return res
}

console.log(sumFactorial([4, 6]))
console.log(sumFactorial([5, 4, 1]))
