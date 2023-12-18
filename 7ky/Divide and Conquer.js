function divCon(x) {
  return x.reduce((accum, el) => {
    return typeof(el) == 'string' ? accum - el : accum + +el
  }, 0)
}

console.log(divCon([9, 3, '7', '3']))

