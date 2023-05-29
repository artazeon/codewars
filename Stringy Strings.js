function stringy(size) {
  const l = '10'
  const size2 = size / 2
  let s = ''
  for (let i = 0 ; i < size2; i++) {
    s = s + l
  }
  
  return s.length == size ? s : s.slice(0, -1)
}

console.log( stringy(18) )