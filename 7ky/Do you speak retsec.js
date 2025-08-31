function reverseByCenter(s) {
  const mid = Math.floor(s.length / 2)

  if (s.length % 2 === 0) {
    return s.slice(mid) + s.slice(0, mid)
  } else {
    return s.slice(mid + 1) + s[mid] + s.slice(0, mid)
  }
}

console.log(reverseByCenter('secret'))
console.log(reverseByCenter('agent'))
