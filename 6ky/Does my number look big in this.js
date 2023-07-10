function narcissistic(value) {
  const str = String(value)
  const arr = str.split('')

  const res = arr.reduce((ac, el) => {
    return ac + Math.pow(el, arr.length)}, 0)
  return res == value
}


console.log(narcissistic(153))
console.log(narcissistic(122))
