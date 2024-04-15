function findMissing(arr1, arr2) {
  const sArr1 = arr1.sort()
  const sArr2 = arr2.sort()

  for (let i = 0; i < sArr1.length; i++) {
    if (sArr1[i] != sArr2[i]) {
      return sArr1[i]
    }
  }
}

console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]))
