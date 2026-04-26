function isKiss(words) {
  const arr = words.split(' ')
  const isTrue = words.split(' ').every((el) => el.length <= arr.length)
  return isTrue ? 'Good work Joe!' : 'Keep It Simple Stupid'
}

console.log(isKiss('Joe had a bad day'))
console.log(isKiss('Joe is having no fun'))
