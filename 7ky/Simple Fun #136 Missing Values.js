function missingValues(arr) {
  const obj = {}
  let res = 1

  arr.forEach((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)))

  for (const key in obj) {
    console.log(key, obj[key])
    if (obj[key] === 1) {
      res = res * key * key
    }
    if (obj[key] === 2) {
      res = res * key
    }
  }

  return res
}

console.log(missingValues([1, 1, 1, 2, 2, 3]))
