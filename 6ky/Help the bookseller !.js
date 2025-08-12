function stockList(books, categories) {
  if (books.length < 1 || categories.length < 1) return ''
  const obj = {}

  for (let i = 0; i < books.length; i++) {
    const book = books[i].split(' ')[1]
    if (obj[books[i][0]]) {
      obj[books[i][0]] += +book
    } else {
      obj[books[i][0]] = +book
    }
  }

  const res = categories.map((el) =>
    obj[el] ? `(${el} : ${obj[el]})` : `(${el} : 0)`
  )

  return res.join(' - ')
}
console.log(
  stockList(
    ['ABART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'],
    ['A', 'B', 'C', 'W']
  ),
  '(A : 20) - (B : 114) - (C : 50) - (W : 0)'
)
