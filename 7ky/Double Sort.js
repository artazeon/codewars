function dbSort(a) {
  const numArr = a.filter((el) => typeof el === 'number').sort((a, b) => a - b)
  const strArr = a.filter((el) => typeof el === 'string').sort()
  return numArr.concat(strArr)
}

console.log(dbSort([6, 2, 3, 4, 5]))
console.log(dbSort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]))
console.log(dbSort([1, 1, 1, 1, 1, 2, '1', '2', 'three', 1, 2, 3]))
