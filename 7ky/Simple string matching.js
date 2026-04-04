function solve(a, b) {
  if (!a.includes('*')) {
    return a === b
  }

  const [start, end] = a.split('*')

  if (start && !b.startsWith(start)) return false
  if (end && !b.endsWith(end)) return false

  return b.length >= start.length + end.length
}

console.log(solve('code*s', 'codewars'), true)
console.log(solve('codewar*s', 'codewars'), true)
console.log(solve('code*warrior', 'codewars'), false)
console.log(solve('c', 'c'), true)
console.log(solve('*s', 'codewars'), true)
console.log(solve('*s', 's'), true)
console.log(solve('s*', 's'), true)
console.log(solve('aa', 'aaa'), false)
console.log(solve('aa*', 'aaa'), true)
console.log(solve('aaa', 'aa'), false)
console.log(solve('aaa*', 'aa'), false)
console.log(solve('aaa*aaa ', 'aaa'), true)
