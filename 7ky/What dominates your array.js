function dominator(arr) {
  let counter = {}

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i]

    counter[el] = (counter[el] || 0) + 1

    if (counter[el] >= Math.floor(arr.length / 2 + 1)) {
      return el
    }
  }

  return -1
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]))
console.log(dominator([1, 1, 1, 2, 2, 2]))
console.log(dominator([1, 2, 3, 4, 5]))
console.log(dominator([1, 1, 1, 2, 2, 2, 2]))
