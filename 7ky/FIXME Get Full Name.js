class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim()
  }
}

const res = new Dinglemouse('Clint', 'Eastwood')
const res2 = new Dinglemouse('', 'Eastwood')

console.log(res.getFullName())
console.log(res2.getFullName())
