function derDieDas(wort) {
  let count = 0
  const vowels = 'aeiouäöü'

  wort.split('').forEach((el) => {
    if (vowels.includes(el.toLowerCase())) {
      count++
    }
  })

  return count <= 1 ? `das ${wort}` : count <= 3 ? `die ${wort}` : `der ${wort}`
}

console.log(derDieDas('OOOpa'), 'der OOOpa', '4 Vokale -> der OOOpa')
console.log(
  derDieDas('Suppenhuhn'),
  'die Suppenhuhn',
  '3 Vokale -> die Suppenhuhn',
)
console.log(
  derDieDas('Geheimdienst'),
  'der Geheimdienst',
  '5 Vokale -> der Geheimdienst',
)
console.log(
  derDieDas('Ofenkartoffel'),
  'der Ofenkartoffel',
  '5 Vokale -> der Ofenkartoffel',
)
console.log(derDieDas('Fisch'), 'das Fisch', '1 Vokal -> das Fisch')
console.log(
  derDieDas('Knödel'),
  'die Knödel',
  '1 Umlaut, 1 Vokal -> die Knödel',
)
console.log(
  derDieDas('Leberkaassemmi'),
  'der Leberkaassemmi',
  '6 Vokale -> der Leberkaassemmi',
)
