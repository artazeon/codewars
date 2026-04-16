function FindFunction(func, arr) {
  const fn = func.filter((item) => typeof item === 'function')
  return arr.filter((el) => fn[0](el))
}

console.log(FindFunction([9, 3, (a) => a % 2, 1, 0], [1, 2, 3, 4]), [1, 3])
