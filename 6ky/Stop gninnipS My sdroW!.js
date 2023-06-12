function spinWords(string) {
  const arr = string.split(' ')
  const revArr = arr.map((item, index) => {
    if (item.length >= 5) {
      return item.split('').reverse().join('');
    } else {
      return item
    }
  })
  return revArr.join(' ')
}

console.log(spinWords('Hey fellow warriors'))
