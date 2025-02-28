function replaceAll(seq, find, replace) {
  const isString = typeof seq === 'string'
  const arr = isString ? seq.split('') : seq
  const result = arr.map((el) => (el === find ? replace : el))
  return isString ? result.join('') : result
}

console.log(replaceAll([], 1, 2))
console.log(replaceAll([1, 2, 2], 1, 2))
console.log(replaceAll('Hello World', 'o', 0))
console.log(
  replaceAll(
    'Ju~w~xi.tKtB[nTUKz#]JX^D5nO=M-(ki>QD3adm`l5W-/%l>H-L3 Fg"`$<oWZ1.dzj1spt00$mb~<qRO',
    'w',
    ':'
  )
)
