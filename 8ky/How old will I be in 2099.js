function calculateAge(bornY, curY) {
  const difY = Math.abs(curY - bornY)

  return difY === 0
    ? `You were born this very year!`
    : curY - bornY > 1
    ? `You are ${difY} years old.`
    : curY - bornY > 0
    ? `You are ${difY} year old.`
    : curY - bornY < -1
    ? `You will be born in ${difY} years.`
    : `You will be born in ${difY} year.`
}

console.log(calculateAge(2012, 2012))
console.log(calculateAge(2000, 2002))
console.log(calculateAge(2000, 2001))
console.log(calculateAge(2001, 2000))
console.log(calculateAge(2002, 2000))
