function cubeOdd(arr) {
  return arr.sort().reduce((ac, el) => {
    return typeof el !== 'number' ? undefined : el % 2 !== 0 ? ac + el ** 3 : ac
  }, 0)
}

console.log(cubeOdd([26, 49, 49, 32, 'a', -8, 24]))
console.log(cubeOdd([26, 49, 49, 32, 'a', -8, 23, 23, 18]))
