multiplicationTable = function (size) {
  let table = []

  for (let i = 1; i <= size; i++) {
    let row = []

    for (let k = 1; k <= size; k++) {
      row.push(i * k)
    }

    table.push(row)
  }

  return table
}

console.log(multiplicationTable(3))
