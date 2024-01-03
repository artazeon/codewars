class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name
    this.age = age
    this.legs = legs
    this.species = species
    this.status = status
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status)
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status)
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status)
    this.master = master
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
  greetMaster() {
    return `Hello ${this.master}`
  }
}

const shark = new Shark('Акулёнок', 7, 'active')
const cat = new Cat('Котек', 12, 'Хоз')
const dog = new Dog('Пёс', 10, 'Охран', 'Боба')
console.log(shark.introduce())
console.log(cat.introduce())
console.log(dog.introduce())
console.log(dog.greetMaster())
