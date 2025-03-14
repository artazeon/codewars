function solve(stones) {
  const arr = stones.split('')
  const res = arr.filter((el, ind) => el != arr[ind + 1])
  return arr.length - res.length
}

console.log(solve('RGBRGBRGGB'))
