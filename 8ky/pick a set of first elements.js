var arr = ['a', 'b', 'c', 'd', 'e', 'b', 'c', 'd', 'e']

function first(arr, n = 1) {
  return arr.slice(0, n)
}

console.log(first([...arr]))
console.log(first([...arr], 2))
