function spacey(array) {
  const res = []
  let acc = ''

  for (let i = 0; i < array.length; i++) {
    acc += array[i]
    res.push(acc)
  }

  return res
}

console.log(spacey(['kevin', 'has', 'no', 'space']))
