function elevatorDistance(array) {
  let res = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      res += array[i] - array[i + 1]
    } else if (
      array[i] < array[i + 1] &&
      array.indexOf(array[i]) != array.length
    ) {
      res = res + Math.abs(array[i] - array[i + 1])
    }
  }

  return res
}

console.log(elevatorDistance([5, 2, 8]))
