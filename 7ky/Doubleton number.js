function doubleton(num) {
  while (true) {
    num++

    if (new Set(String(num)).size === 2) {
      return num
    }
  }
}

console.log(doubleton(12))
console.log(doubleton(120))
console.log(doubleton(1234))
