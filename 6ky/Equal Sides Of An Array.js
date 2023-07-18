function findEvenIndex(arr) {
  const res = arr.findIndex((el, index) => {
    const leftSum = arr.slice(0, index).reduce((acc, value) => acc + value, 0)
    const rightSum = arr.slice(index + 1, arr.length).reduce((acc, value) => acc + value, 0)

      return  leftSum === rightSum
  })
  return res
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]))
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]))
console.log(findEvenIndex([1,2,3,4,5,6]))
