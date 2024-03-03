function mostFrequentItemCount(collection) {
  const counter = {}
  console.log(collection)
  for (let prop of collection) {
    if (counter[prop]) {
      counter[prop]++
    } else {
      counter[prop] = 1
    }
  }
  const sortedArray = Object.entries(counter).sort((a, b) => a[1] - b[1])

  return collection.length ? sortedArray[sortedArray.length - 1][1] : 0
}
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))
console.log(mostFrequentItemCount([]))
