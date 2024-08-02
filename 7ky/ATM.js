function solve(n) {
  if (n % 10 != 0) {
    return -1
  }
  let counter = 0
  const money = [500, 200, 100, 50, 20, 10]

  for (let i = 0; i < money.length; i++) {
    counter += Math.trunc(n / money[i])
    n = n % money[i]
  }

  return counter
}
//10, 20, 50, 100, 200, 500

console.log(solve(1250))
console.log(solve(125))
