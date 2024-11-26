function solve(st, a, b) {
  const p1 = st.slice(0, a)
  const p2 = st.slice(b + 1, st.length)
  const pi = st
    .slice(a, b + 1)
    .split('')
    .reverse()
    .join('')

  return p1 + pi + p2
}

console.log(solve('codewars', 1, 5))
