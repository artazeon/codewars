function pyramid(n) {
  const arr = []

  for (let i = 1; i <= n; i++) {
    let arrTemp = Array(i).fill(1)
    arr.push(arrTemp)
  }

  return arr
}

console.log(pyramid(1))
console.log(pyramid(2))
console.log(pyramid(99))
