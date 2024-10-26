const seqlist = (first, c, l) => {
  const arr = [first]

  while (arr.length < l) {
    arr.push(arr[arr.length - 1] + c)
  }

  return arr
}

console.log(seqlist(0, 1, 20))
