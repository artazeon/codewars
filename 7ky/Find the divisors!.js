function divisors(integer) {
  const arr = []

  for (i = 2; i < integer; i++) {

    if (integer % i === 0) {
      arr.push(i)
    }

  }

  return arr.length ? arr : `${integer} is prime`
};

console.log(divisors(15))
console.log(divisors(12))
console.log(divisors(13))
