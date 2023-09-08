function DNAStrand(dna) {
  const dnaArr = []

  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        dnaArr.push('T')
        break
      case 'T':
        dnaArr.push('A')
        break
      case 'C':
        dnaArr.push('G')
        break
      case 'G':
        dnaArr.push('C')
        break

    }
  }

  return dnaArr.join('')
}

console.log(DNAStrand('ATTGC'))
