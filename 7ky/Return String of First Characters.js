function makeString(s) {
  const res = s.split(' ').map((el) => el[0])
  return res.join('')
}

console.log(makeString('sees eyes xray yoat'))
