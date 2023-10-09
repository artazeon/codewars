function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("N должно быть от 0 до 12.");
  } else {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
}

console.log(factorial(0))
console.log(factorial(5))
console.log(factorial(3))
console.log(factorial(22))
