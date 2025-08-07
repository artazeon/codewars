function diamond(n) {
  if (n < 1 || n % 2 === 0) return null

  let diamond = ''
  let center = Math.floor(n / 2)

  for (let i = 0; i < n; i++) {
    const level = i <= center ? i : n - i - 1
    const spaces = ' '.repeat(center - level)
    const stars = '*'.repeat(level * 2 + 1)
    diamond += spaces + stars + '\n'
  }

  return diamond
}

console.log(diamond(1), '*\n')
console.log(diamond(3), ' *\n***\n *\n')
console.log(diamond(5), '  *\n ***\n*****\n ***\n  *\n')
console.log(diamond(19))
