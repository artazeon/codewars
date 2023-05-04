function twiceAsOld(dadYearsOld, sonYearsOld) {
  const son2 = sonYearsOld * 2
  return Math.abs(dadYearsOld - son2)
}
console.log(twiceAsOld(36,7))