const powers = (n) => {
  const arr = []

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      let one = Math.pow(2, i)
      if (one + Math.pow(2, j) === n) {
        arr.push(one, Math.pow(2, j))
      }
    }
  }

  return arr.slice(0, arr.length - 2)
}

console.log(powers())
