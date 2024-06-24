function wordSearch(query, seq) {
  const res = seq.filter((el) => el.toLowerCase().includes(query.toLowerCase()))
  return res.length ? res : ['Empty']
}

console.log(wordSearch('ab', ['za', 'ab', 'abc', 'zab', 'zbc']))
console.log(wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc']))
