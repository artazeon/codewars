function sayHello( name, city, state ) {
  const allName = name.join(' ')
  return `Hello, ${allName}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))
