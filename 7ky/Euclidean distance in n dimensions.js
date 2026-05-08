function euclideanDistance(p1, p2) {
  let sum = 0

  for (let i = 0; i < p1.length; i++) {
    sum += (p1[i] - p2[i]) ** 2
  }

  return Math.sqrt(sum)
}
console.log(euclideanDistance([-1, 2], [2, 4]))
console.log(euclideanDistance([-1, 2, 5], [2, 4, 9]))
