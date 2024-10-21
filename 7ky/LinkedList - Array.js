function listToArray(list) {
  const arr = []
  const next = (subList) => {
    if (subList) {
      arr.push(subList.value)
      next(subList.next)
    }
  }
  next(list)

  return arr
}

var list1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } }
var list2 = { value: 'foo', next: { value: 'bar', next: null } }

console.log(listToArray(list1))
console.log(listToArray(list2))
