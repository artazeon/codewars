function DNAtoRNA(dna) {
  return dna.replace(/[T]/g, 'U')
}

console.log(DNAtoRNA("GACCGCCGCC"))