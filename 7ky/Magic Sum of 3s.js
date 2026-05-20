function magicSum(numbers) {
  return numbers.reduce((acc, el) => {
    const item = el.toString()
    if (item.includes('3') && el % 2 !== 0) {
      return acc + el
    }
    return acc
  }, 0)
}

console.log(magicSum([3]))
console.log(magicSum([3, 13]))
console.log(magicSum([30, 34, 330]))
console.log(magicSum([3, 12, 5, 8, 30, 13]))
