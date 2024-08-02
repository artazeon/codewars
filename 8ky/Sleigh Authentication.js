// function Sleigh() {
//   this.name = 'Santa Claus'
//   this.password = 'Ho Ho Ho!'
// }

// Sleigh.prototype.authenticate = function (name, password) {
//   if (name === this.name && password === this.password) {
//     return true
//   } else {
//     return false
//   }
// }

class Sleigh {
  constructor() {
    this.name = 'Santa Claus'
    this.password = 'Ho Ho Ho!'
  }

  authenticate(name, password) {
    return name === this.name && password === this.password
  }
}

var sleigh = new Sleigh()

console.log(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!'))
console.log(sleigh.authenticate('Santa Claus', 'Ho Ho'))
