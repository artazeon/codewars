function sortList(list, sortBy) {
  return list.sort((a, b) => b[sortBy] - a[sortBy])
}

console.log(
  sortList(
    [
      { a: 1, b: 3 },
      { a: 3, b: 2 },
      { a: 2, b: 40 },
      { a: 4, b: 12 },
    ],
    'a'
  )
)
