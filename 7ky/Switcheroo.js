function switcheroo(x) {
  return x.replace(/a|b/g, (match) => {
    return match === 'a' ? 'b' : 'a'
  })
}

console.log(switcheroo('aaabcccbaaa'))
