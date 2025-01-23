function allNonConsecutive(arr) {
  const res = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      res.push({ i: i + 1, n: arr[i + 1] })
    }
  }
  return res
}

console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]))
//[{i: 4, n:6}, {i: 7, n:10}]
