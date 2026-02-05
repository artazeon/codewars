function pairZeros(arr) {
  const result = []
  let waitZero = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i])
    }

    if (arr[i] === 0 && waitZero === false) {
      waitZero = true
      result.push(arr[i])
    } else if (arr[i] === 0 && waitZero === true) {
      waitZero = false
    }
  }

  return result
}

console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0]), [1, 0, 1, 2, 0, 3, 0])
