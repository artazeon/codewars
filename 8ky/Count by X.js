function countBy(x, n) {
  let z = [];

  for (let i = x; i <= n*x; i+=x) {
    z.push(i)
  }

  return z;
}


console.log( countBy(2,5) )