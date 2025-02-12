function findChildren(santasList, children) {
  const dublLis = children.filter((el) => santasList.includes(el))
  const finalList = Array.from(new Set(dublLis))
  return finalList.sort()
}

console.log(
  findChildren(
    ['Jason', 'Jackson', 'Jordan', 'Johnny'],
    ['Jason', 'Jordan', 'Jennifer']
  ),
  ['Jason', 'Jordan']
)
console.log(
  findChildren(
    ['jASon', 'JAsoN', 'JaSON', 'jasON'],
    ['JasoN', 'jASOn', 'JAsoN', 'jASon', 'JASON']
  ),
  ['JAsoN', 'jASon']
)
console.log(
  findChildren(['Jason', 'James', 'Johnson'], ['Jason', 'James', 'JJ']),
  ['James', 'Jason']
)
