function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let res = 0

  for (let i = 0; i < 8; i++) {
    res = res + Math.pow(arguments[i], 2)
  }

  return Math.floor(Math.sqrt(res)/2)
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))

// Умножьте каждое число само на себя.
// Сложите их все вместе.
// Возьмите квадратный корень из результата.
// Разделить на два.
