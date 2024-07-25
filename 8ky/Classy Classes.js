class Person {
  constructor(name, old) {
    this.name = name
    this.old = old
    this.info = `${this.name} age is ${this.old}`
  }
}
console.log(new Person('john', 34).info)
