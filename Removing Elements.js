function removeEveryOther(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    if (i % 2 !== 0) {
      arr.splice(i, 1)
    }
  }
  return arr
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
