function moveZeros(arr) {
  const zeroFilter = arr.filter((el) => el !== 0)
  const zeroLength = arr.length - zeroFilter.length
  const result = zeroFilter.concat(Array(zeroLength).fill(0))
  return result
}

console.log(
  moveZeros([
    'a',
    0,
    0,
    'b',
    null,
    'c',
    'd',
    0,
    1,
    false,
    0,
    1,
    0,
    3,
    [],
    0,
    1,
    9,
    0,
    0,
    {},
    0,
    0,
    9,
  ])
)
