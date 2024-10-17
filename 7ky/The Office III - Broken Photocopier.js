function broken(x) {
  let whole = ''

  for (let i = 0; i < x.length; i++) {
    x[i] == '1' ? (whole += '0') : (whole += '1')
  }

  return whole
}

console.log(broken('10000000101101111110011001000'))
