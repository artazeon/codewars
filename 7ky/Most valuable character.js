function solve(st) {
  let weight = -1
  let letter = ''

  for (let i = 0; i < st.length; i++) {
    const current = st.lastIndexOf(st[i]) - st.indexOf(st[i])

    if (current > weight || (current === weight && st[i] < letter)) {
      weight = current
      letter = st[i]
    }
  }

  return letter
}

console.log(solve('a'), 'a')
console.log(solve('aa'), 'a')
console.log(solve('bcd'), 'b')
console.log(solve('axyzxyz'), 'x')
console.log(solve('aabccc'), 'c')
