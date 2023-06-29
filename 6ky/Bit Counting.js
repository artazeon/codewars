var countBits = function(n) {
  const binaryСode = n.toString(2)
  const arr = binaryСode.split('')
  const sum = arr.reduce((accum, item)=> accum+ +item,0)
  return sum
};
console.log(countBits(1234))
