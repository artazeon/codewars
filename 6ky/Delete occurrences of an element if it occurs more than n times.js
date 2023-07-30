function deleteNth(arr, n) {
  const counter = {}
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (counter[arr[i]] && counter[arr[i]] < n) {
      counter[arr[i]]++
      newArr.push(arr[i])
    }
    if (!counter[arr[i]]) {
      counter[arr[i]] = 1
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(deleteNth([1, 1, 1, 1, 3, 3, 7, 2, 2, 2, 2], 3))
