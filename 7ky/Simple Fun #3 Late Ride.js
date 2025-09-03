function lateRide(n) {
  const time = [0, 0]

  while (n >= 60) {
    n = n - 60
    time[0]++
  }

  time[1] = n

  return time
    .join('')
    .split('')
    .reduce((acc, el) => acc + +el, 0)
}

console.log(lateRide(240))
console.log(lateRide(808))
