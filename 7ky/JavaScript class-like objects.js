class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  toString() {
    return `${this.name} is a ${this.type}`
  }
}

var dog = new Animal('Max', 'dog')

console.log(dog.toString())
console.log(dog.name)
console.log(dog.type)
console.log((dog.name = 'Lassie'))
