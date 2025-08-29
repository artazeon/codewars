const remainder = (D, d) => {
  while (D >= d) {
    D -= d
  }
  return D
}
console.log(remainder(3, 2))
