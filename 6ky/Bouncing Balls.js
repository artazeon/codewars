function bouncingBall(h, bounce, window) {
  if (bounce >= 1 || bounce < 0 || h < 0 || window >= h) {
    return -1
  }
  let count = 0
  for (let i = 0; h > window; i++) {
    h = h * bounce
    h > window ? (count = count + 2) : count++
  }
  return count
}

console.log(bouncingBall(3.0, 0.66, 1.5))
console.log(bouncingBall(30, 0.66, 1.5))
console.log(bouncingBall(2, 0.5, 1))
