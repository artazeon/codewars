function indexOf(head, value) {
  for (let i = 0; i < head.length; i++) {
    if (head[i] === value) {
      return i
    }
  }
  return -1
}

console.log(indexOf([1, 2, 3], 2))
console.log(indexOf(['aaa', 'b', 'abc'], 'aaa'))
