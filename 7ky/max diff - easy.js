function maxDiff(list) {
  return list.length === 0 ? 0: Math.max(...list) - Math.min(...list)
}

console.log(maxDiff([1, 2, 3, -4]))
console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]))
console.log(maxDiff([]))

