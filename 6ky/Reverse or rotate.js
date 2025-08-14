function revrot(str, sz) {
  if (sz <= 0 || !str || sz > str.length) return ''
  const arr = []
  let fragment = ''

  for (let i = 0; i < str.length; i++) {
    fragment += str[i]

    if (fragment.length === sz) {
      arr.push(fragment)
      fragment = ''
    }
  }

  const result = arr.map((frag) => {
    const sumFragment = frag.split('').reduce((acc, el) => acc + Number(el), 0)

    return sumFragment % 2 === 0
      ? frag.split('').reverse().join('')
      : frag.slice(1) + frag[0]
  })

  return result.join('')
}
console.log(revrot('123456987654', 6))
console.log(revrot('123456987653', 6))
