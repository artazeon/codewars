function abundantNumber(num) {
  const arr = []

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      arr.push(i)
    }
  }

  const summ = arr.reduce((acc, el) => acc + el, 0)
  return summ > num
}
console.log(abundantNumber(12))
