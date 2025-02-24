const uniqueSum = (lst) =>
  lst.length ? [...new Set(lst)].reduce((acc, el) => acc + el, 0) : null
console.log(uniqueSum([-1, -1, 5, 2, -7]))
console.log(uniqueSum([]))
