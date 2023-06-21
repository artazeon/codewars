function digitalRoot(n) {
  let cifr = n
  let str = String(n)

  while (str.length > 1) {
    cifr = str
      .split('')
      .reduce((accum, item) => {
        return accum + +item
      }, 0)
    str = String(cifr)
  }

  return cifr
}

console.log(digitalRoot(16))
console.log(digitalRoot(161))
console.log(digitalRoot(456))
console.log(digitalRoot(4561))



// чужое решение на заметку
// function digital_root(n) {
//   if (n < 10) return n;
  
//   return digital_root(
//     n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// }