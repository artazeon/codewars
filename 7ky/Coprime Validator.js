function isCoprime(x, y) {
  const factors = (n) => {
    let arr = []
    for (let i = 0; i <= n; i++) {
      if (n % i === 0) {
        arr.push(i)
      }
    }
    return arr
  }

  arrX = factors(x)
  arrY = factors(y)

  const result = arrX.filter((el, ind) => arrY.includes(el))

  return result[result.length - 1] === 1
}

console.log(isCoprime(20, 27))
console.log(isCoprime(12, 39))
