function doubles(s) {
  let newS = s
  while (/([a-zA-Z])\1/.test(newS)) {
    newS = newS.replace(/(.)\1/g, '')
  }
  return newS
}

console.log(doubles('abbcccdddda'))
