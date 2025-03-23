const toAcronym = (inp) =>
  inp
    .split(' ')
    .map((el) => el[0].toUpperCase())
    .join('')

console.log(toAcronym('Code Wars'))
