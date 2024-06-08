function average(scores) {
  return Math.round(scores.reduce((acc, el) => acc + el / scores.length, 0))
}

console.log(average([49, 3, 5, 300, 7]))
