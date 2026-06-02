function process2Arrays(arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)

  let countBoth = 0
  let countOnly1 = 0
  let countOnly2 = 0

  for (const item of arr1) {
    if (set2.has(item)) {
      countBoth++
    } else {
      countOnly1++
    }
  }

  for (const item of arr2) {
    if (!set1.has(item)) {
      countOnly2++
    }
  }

  return [countBoth, countOnly1 + countOnly2, countOnly1, countOnly2]
}

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr2 = [2, 4, 6, 8, 10, 12, 14]
console.log(process2Arrays(arr1, arr2, [4, 8, 5, 3]))
