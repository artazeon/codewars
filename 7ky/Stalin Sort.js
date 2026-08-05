function stalinSort(array) {
  if (array.length === 0) return

  let lastSaved = array[0]
  let i = 1

  while (i < array.length) {
    if (array[i] < lastSaved) {
      array.splice(i, 1)
    } else {
      lastSaved = array[i]
      i++
    }
  }
  return array
}
console.log(stalinSort([3, 1, 4, 1, 5, 9, 2]))
console.log(stalinSort([5, 3, 1]))
