function removeDuplicateWords (s) {
  const duplicateArr = s.split(' ')
  const noDuplicateArr = duplicateArr.filter((el, ind) => {
    return duplicateArr.indexOf(el) === ind
  })
  return noDuplicateArr.join(' ')
}

console.log(removeDuplicateWords('arta alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
