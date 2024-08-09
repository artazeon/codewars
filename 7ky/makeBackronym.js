const dict = {
  A: 'awesome',
  B: 'beautiful',
  C: 'confident',
  D: 'disturbing',
  E: 'eager',
  F: 'fantastic',
  G: 'gregarious',
  H: 'hippy',
  I: 'ingestable',
  J: 'joke',
  K: 'klingon',
  L: 'literal',
  M: 'mustache',
  N: 'newtonian',
  O: 'oscillating',
  P: 'perfect',
  Q: 'queen',
  R: 'rant',
  S: 'stylish',
  T: 'turn',
  U: 'underlying',
  V: 'volcano',
  W: 'weird',
  X: 'xylophone',
  Y: 'yogic',
  Z: 'zero',
}

var makeBackronym = function (string) {
  let backronym = ''

  string.split('').forEach((element) => {
    backronym += `${dict[element.toUpperCase()]} `
  })
  return backronym.slice(0, -1)
}

console.log(makeBackronym('dgm'))
