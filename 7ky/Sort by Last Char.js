const last = (x) =>
  x.split(' ').sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]))

console.log(last('man i need a taxi up to ubud'))
//['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
