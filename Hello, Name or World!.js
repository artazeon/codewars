function hello(name = 'World') {
  if (name === '') {
    name = 'World'
  }

  const newName = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)

  return `Hello, ${newName}!`
}

console.log(hello('alice'))
console.log(hello())
console.log(hello(''))
