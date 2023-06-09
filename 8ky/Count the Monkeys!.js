function monkeyCount(n) {
  let monkey = []
  for (let i = 1; i <= n; i++) {
    monkey.push(i)
  }
  return monkey
}

console.log(monkeyCount(5))
