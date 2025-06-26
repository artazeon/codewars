function interlockable(a, b) {
  const arr1 = a.toString(2).split('').reverse()
  const arr2 = b.toString(2).split('').reverse()

  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] == '1' && arr2[i] == '1') return false
  }
  return true
}

console.log(interlockable(9, 4))
console.log(interlockable(3, 6))
