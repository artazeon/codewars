function waterbombs(fire, w) {
  if (!fire.includes('x')) return 0

  const arr = fire.split('Y')

  let count = 0

  for (let i = 0; i < arr.length; i++) {
    const len = arr[i].length

    if (len > 0) {
      count += Math.ceil(len / w)
    }
  }

  return count
}

console.log(waterbombs('xxxxYxYx', 4))
console.log(waterbombs('xxYxx', 3))
console.log(waterbombs('xx', 1), 2)
console.log(waterbombs('xxxYx', 1), 4)
console.log(waterbombs('Y', 4), 0)
