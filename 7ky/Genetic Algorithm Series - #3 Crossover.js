function crossover(chromosome1, chromosome2, index) {
  const a1 = chromosome1.slice(0, index) + chromosome2.slice(index)
  const a2 = chromosome2.slice(0, index) + chromosome1.slice(index)

  return [a1, a2]
}

const tests = [
  { chromosome1: '', chromosome2: '', index: 0 },
  { chromosome1: '01', chromosome2: '10', index: 1 },
  { chromosome1: '00000000', chromosome2: '11111111', index: 0 },
  { chromosome1: '00000000', chromosome2: '11111111', index: 7 },
]

for (const t of tests) {
  console.log(crossover(t.chromosome1, t.chromosome2, t.index))
}
