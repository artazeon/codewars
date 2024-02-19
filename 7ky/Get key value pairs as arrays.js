function keysAndValues(data) {
  const arr = [[], []]

  for (let key in data) {
    arr[0].push(key)
    arr[1].push(data[key])
  }
  return arr
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
