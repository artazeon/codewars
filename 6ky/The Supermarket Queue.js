function queueTime(customers, n) {
  if (!customers.length) return 0

  let checkouts = customers.slice(0, n)

  for (let i = n; i < customers.length; i++) {
    const minValue = Math.min(...checkouts)

    const minIndex = checkouts.findIndex((num) => num === minValue)

    checkouts[minIndex] += customers[i]
  }

  return Math.max(...checkouts)
}

console.log(queueTime([5, 3, 4], 1))
console.log(queueTime([10, 2, 3, 3], 2))
console.log(queueTime([2, 3, 10], 2))
console.log(queueTime([], 1))
