function passed(list) {
  let count = 0
  const average =
    list.reduce((acc, el) => (el <= 18 ? (count++, acc + el) : acc), 0) / count

  return average ? Math.round(average) : 'No pass scores registered.'
}

console.log(passed([10, 10, 10, 18, 20, 20]))
console.log(passed([21, 22, 24]))
