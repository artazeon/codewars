function swapHeadAndTail(arr) {
  const mid = Math.floor(arr.length / 2)

  return arr.length % 2 === 0
    ? [...arr.slice(mid), ...arr.slice(0, mid)]
    : [...arr.slice(mid + 1), arr[mid], ...arr.slice(0, mid)]
}

console.log(swapHeadAndTail([1, 2, 3, 4, 5]), [4, 5, 3, 1, 2])
console.log(swapHeadAndTail([1, 2, 3, 4]), [4, 3, 1, 2])
