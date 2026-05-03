function strangeMath(n, k) {
  const arr = Array.from({ length: n }, (_, i) => i + 1)

  arr.sort((a, b) => String(a).localeCompare(String(b)))

  return arr.indexOf(k) + 1
}

console.log(strangeMath(11, 2))
