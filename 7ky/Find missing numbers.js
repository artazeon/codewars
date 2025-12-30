function findMissingNumbers(arr) {
  const missingArr = []

  for (let i = arr[0]; i != arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      missingArr.push(i)
    }
  }

  return missingArr
}

console.log(findMissingNumbers([-3, -2, 1, 4]), [-1, 0, 2, 3])
