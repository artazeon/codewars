function diff(a, b) {
  const setA = new Set(a)
  const setB = new Set(b)

  const res = [
    ...[...setA].filter((x) => !setB.has(x)),
    ...[...setB].filter((x) => !setA.has(x)),
  ]
  console.log(res)

  return res.sort((x, y) => String(x).localeCompare(String(y)))
}

let a = ['a', 'b', 'z', 'd', 'e', 'd']
let b = ['a', 'b', 'j', 'j']
console.log(diff(a, b))
