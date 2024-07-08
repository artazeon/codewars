function save(sizes, hd) {
  let result = 0
  let i = 0
  while (result + sizes[i] <= hd) {
    result += sizes[i]
    i++
  }

  return i
}

console.log(save([4, 4, 4, 3, 3], 12))
console.log(save([4, 4, 4, 3, 3], 11))
