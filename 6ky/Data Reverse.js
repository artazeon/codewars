function dataReverse(data) {
  let temp = []
  for (var i = 0; i < data.length; i += 8) {
    temp.push(data.slice(i, i + 8))
  }
  temp.reverse()
  var result = []

  for (var i = 0; i < temp.length; i++) {
    result = result.concat(temp[i])
  }

  return result
}

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
)
