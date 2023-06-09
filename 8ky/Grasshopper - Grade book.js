function getbal(s1, s2, s3) {
  const n = (s1 + s2 + s3) / 3
  console.log(n)
  return 90 <= n && n <= 100
    ? 'A'
    : 80 <= n && n < 90
    ? 'B'
    : 70 <= n && n < 80
    ? 'C'
    : 60 <= n && n < 70
    ? 'D'
    : 0 <= n && n < 60
    ? 'F'
    : 'хз'
}

console.log(getbal(95, 90, 93))
console.log(getbal(100, 85, 96))
console.log(getbal(92, 93, 94))
