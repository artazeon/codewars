function sumOfN(n) {
  let arr = [0];
  let sign = n >= 0 ? 1 : -1;

  for (let i = 1; i <= Math.abs(n); i++) {
    let sum = i * sign + arr[arr.length - 1];
    arr.push(sum);
  }

  return arr;
}


//console.log(sumOfN(3))
console.log(sumOfN(-3))

// [ 0,  1,    3,      6,   ...]
//   0  0+1  0+1+2  0+1+2+3


