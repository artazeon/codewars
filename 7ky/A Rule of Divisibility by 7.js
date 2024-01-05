function seven(m) {
  let count = 0;
 
  while (m > 99) {
    let lastDigit = m % 10;
    let numberWithoutLastDigit = Number(String(m).slice(0, -1))

    m = numberWithoutLastDigit - 2 * lastDigit;
    count++;
  }

  return [m, count];
}

console.log(seven(371))
console.log(seven(1603))
//m = 371 -> 37 − (2×1) -> 37 − 2 = 35
//m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7и 7 делится на 7.
