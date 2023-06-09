function expressionMatter(a, b, c) {
  const one = a * (b + c)
  const two = a * b * c
  const three = a + b * c
  const four = (a + b) * c
  const five = a + b + c
  const six = a * b + c
  const s =
    one >= two && one >= three && one >= four && one >= five && one >= six
      ? one
      : two >= one && two >= three && two >= four && two >= five && two >= six
      ? two
      : three >= one && three >= two && three >= four && three >= five && three >= six
      ? three
      : four >= one && four >= two && four >= three && four >= five && four >= six
      ? four
      : five >= one && five >= two && five >= three && five >= four && five >= six 
      ? five
      : six 
      console.log(one, two, three, four, five, six)
  return s
}

console.log(expressionMatter(1, 1, 2))
