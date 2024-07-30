function meeting(x) {
  const index = x.indexOf('O')
  return index !== -1 ? index : 'None available!'
}

console.log(meeting(['X', 'O', 'X']))
