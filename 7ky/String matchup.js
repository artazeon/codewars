function solve(a, b) {
  // const variable = b[0]
  // const regex = new RegExp(variable, 'g')
  // const matches = a.match(regex)

  const res = []

  for (let i = 0; i < b.length; i++) {
    let temp = a.filter((el) => b[i] === el)

    res.push(temp.length)
  }

  return res
}

console.log(solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap']))
