function noBoringZeros(n) {
  let str = n.toString()

  while (str[str.length - 1] == 0)
  {str = str.slice(0, -1)}
  return +str
}

console.log(noBoringZeros(1450))
