function sumMix(x) {
  const sum = x.reduce((acc, curr) => {
    return acc + +curr
  }, 0)

  return sum
}

console.log(sumMix([9, 3, '7', '3']))
