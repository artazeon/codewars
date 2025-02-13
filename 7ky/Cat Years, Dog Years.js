var ownedCatAndDog = function (catYears, dogYears) {
  const calculateAge = (years, first, second, later) => {
    if (years < first) return 0
    if (years < first + second) return 1
    return 2 + Math.floor((years - first - second) / later)
  }

  return [calculateAge(catYears, 15, 9, 4), calculateAge(dogYears, 15, 9, 5)]
}

console.log(ownedCatAndDog(15, 15))
console.log(ownedCatAndDog(24, 24))
console.log(ownedCatAndDog(56, 64))
