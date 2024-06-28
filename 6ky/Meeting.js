function meeting(s) {
  const arr = s
    .split(';')
    .map((el) => el.toUpperCase().split(':').reverse().join(', '))

  const sortedArr = arr.sort().join(')(')

  return `(${sortedArr})`
}

console.log(
  meeting(
    'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'
  )
)

//"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
