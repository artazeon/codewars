function twoArePositive(...arr) {
  arr.sort()
  return arr[0] <= 0 && arr[1] > 0 && arr[2] > 0
}

console.log(twoArePositive(2, 4, -3))
