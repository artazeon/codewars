function mygcd(x, y) {
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}

console.log(mygcd( 1,  1))
console.log(mygcd(36, 12))

