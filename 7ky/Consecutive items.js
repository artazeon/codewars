function consecutive(arr, a, b) {
  const indA = arr.findIndex((el) => el === a)

  return arr[indA + 1] == b || arr[indA - 1] == b
}

console.log(consecutive([1, 3, 5, 7], 3, 7))
console.log(consecutive([1, 3, 5, 7], 3, 1))
