function spinningRings(innerMax, outerMax) {
  let inner = 0
  let outer = 0
  let moves = 0

  while (true) {
    moves++

    inner = (inner - 1 + (innerMax + 1)) % (innerMax + 1)
    outer = (outer + 1) % (outerMax + 1)

    if (inner === outer) return moves
  }
}

console.log(spinningRings(2, 3))
console.log(spinningRings(3, 2))
