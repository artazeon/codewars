function archersReady(archers) {
  if (!archers.length) return false
  return archers.every((el) => el >= 5)
}

console.log(archersReady([]))
console.log(archersReady([1, 2, 3, 4]))
