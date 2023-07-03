function order(words) {
  const arr = words.split(' ')
  const sArr = []

  for (let i = 1; i <= arr.length; i++) {
    sArr.push(arr.find(word => word.match(new RegExp(i))))
  }


  return sArr.join(' ')
}

console.log(order('is2 Thi1s T4est 3a'))
