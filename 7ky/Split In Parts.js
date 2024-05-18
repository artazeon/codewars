var splitInParts = function (s, partLength) {
  let res = ''

  for (let i = 0; i < s.length; i += partLength) {
    res += s.slice(i, i + partLength) + ' '
  }

  return res.trim()
}

console.log(splitInParts('supercalifragilisticexpialidocious', 3))
