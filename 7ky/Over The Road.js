function overTheRoad(address, n) {
  let neiborAddress = (n * 2) - (address - 1);
  return neiborAddress;
}

console.log(overTheRoad(1, 3))
console.log(overTheRoad(2, 3))
console.log(overTheRoad(7, 11))
