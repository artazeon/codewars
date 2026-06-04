function mirrorImage(arr) {
  const result = []
  arr.some((item, ind) => {
    const rev = String(item).split('').reverse().join('')

    if (rev === String(arr[ind + 1])) {
      result.push(item, arr[ind + 1])
      return true
    }

    return false
  })

  return result.length ? result : [-1, -1]
}

console.log(mirrorImage([11, 22, 33, 33, 22, 11]))
console.log(mirrorImage([454, 86, 57, 75, 16, 88]))
console.log(mirrorImage([99926, 62999]))
