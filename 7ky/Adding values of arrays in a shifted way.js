function addingShifted(arrayOfArrays, shift) {
  const result = []

  for (let i = 0; i < arrayOfArrays.length; i++) {
    const currentShift = i * shift
    const arr = arrayOfArrays[i]

    for (let j = 0; j < arr.length; j++) {
      const index = j + currentShift
      result[index] = (result[index] || 0) + arr[j]
    }
  }

  return result
}

console.log(
  addingShifted(
    [
      [1, 2, 3, 4, 5, 6],
      [7, 7, 7, 7, 7, -7],
    ],
    0,
  ),
)
console.log(
  addingShifted(
    [
      [1, 2, 3, 4, 5, 6],
      [7, 7, 7, 7, 7, 7],
    ],
    3,
  ),
)
