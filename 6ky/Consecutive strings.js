function longestConsec(strarr, k) {
   const n = strarr.length
  if (n === 0 || k > n || k <= 0) {
    return ''
  }


  let res = ''

  for (i = 0; i != n; i++) {
    let temp = strarr.slice(i, k + i).join('')

    res.length < temp.length ? (res = temp) : true
  }
  return res
}

console.log(
  longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2)
)
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3))
