var greet = function(name) {
  let newName = ''

  for (let i = 0; i < name.length; i++) {
    i === 0 ? newName += name[i].toUpperCase() : newName += name[i].toLowerCase()
  }

  return `Hello ${newName}`

};

console.log(greet('riley'))
