function keepOrder(ary, val) {
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] < val && ary[i + 1] >= val) {
      return i + 1
    }

    if (ary[ary.length - 1] < val) {
      return ary.length
    }
  }

  return 0
}

console.log(keepOrder([1, 2, 3, 4, 7], 5))
console.log(keepOrder([1, 2, 3, 4], 5))
console.log(keepOrder([1, 2, 3, 4], 0))
