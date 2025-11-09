function infiniteLoop(arr, d, n) {
  for (let step = 0; step < n; step++) {
    if (d === 'left') {
      const first = arr[0].shift()

      for (let i = 0; i < arr.length - 1; i++) {
        const nextFirst = arr[i + 1].shift()
        arr[i].push(nextFirst)
      }

      arr[arr.length - 1].push(first)
    }

    if (d === 'right') {
      const last = arr[arr.length - 1].pop()

      for (let i = arr.length - 1; i > 0; i--) {
        const prevLast = arr[i - 1].pop()
        arr[i].unshift(prevLast)
      }

      arr[0].unshift(last)
    }
  }

  return arr
}

console.log(
  infiniteLoop(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    'left',

    1
  ),
  '>>>',
  [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1],
  ]
)
console.log(
  infiniteLoop(
    [
      [1, 2],
      [3, 4, 5, 6],
      [7, 8, 9, 10],
    ],
    'left',
    2
  ),
  '>>>',
  [
    [3, 4],
    [5, 6, 7, 8],
    [9, 10, 1, 2],
  ]
)
