function matchArrays(v, r) {
  return v.reduce((count, el) => count + (r.includes(el) ? 1 : 0), 0)
}
console.log(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]))
