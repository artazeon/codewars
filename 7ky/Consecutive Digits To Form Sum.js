function consecutiveDucks(num) {
  return (num & (num - 1)) !== 0
}

console.log(consecutiveDucks(10))
