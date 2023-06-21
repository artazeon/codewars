function findOutlier(integers) {
  const chet = integers.filter(word => word % 2 === 0)
  const neChet = integers.filter(word => word % 2 != 0)
  return chet.length > neChet.length ? +neChet.join() : +chet.join()
}

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([2, 6, 8, 10, 3]))
