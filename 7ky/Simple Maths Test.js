function numberProperty(n) {
  let prime = true

  if (n <= 1) prime = false
  if (n % 2 === 0) prime = false

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) prime = false
  }

  if (n === 2) prime = true

  return [prime, n % 2 === 0, n / 10 === Math.floor(n / 10)]
}
