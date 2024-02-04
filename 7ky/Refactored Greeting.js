class Person {
  constructor(name) {
    this.name = name
  }

  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.name}`
  }
}

let joe = new Person('Joe')

console.log(joe.greet('Kate')) // Вывод: 'Hello Kate, my name is Joe'
console.log(joe.name) // Вывод: 'Joe
