function sevenAte9(str) {
  while (str.includes('797')) {
    str = str.replace(/797/g, '77')
  }

  return str
}

console.log(sevenAte9('7979797'))
console.log(sevenAte9('165561786121789797'))
