function convertHashToArray(hash) {
  return Object.entries(hash)
}

console.log(convertHashToArray({ name: 'Jeremy' }), [['name', 'Jeremy']])
