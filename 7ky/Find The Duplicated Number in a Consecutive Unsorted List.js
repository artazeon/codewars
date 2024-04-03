function findDup(arr) {
  const res = arr.filter((el) => {
    return arr.indexOf(el) != arr.lastIndexOf(el)
  })

  return res[0]
}

console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]))
