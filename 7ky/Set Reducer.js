function setReducer(input) {
  let arr = [...input]

  while (arr.length > 1) {
    const result = []
    let count = 1

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        count++
      } else {
        result.push(count)
        count = 1
      }
    }

    arr = result
  }

  return arr[0]
}

console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]))
