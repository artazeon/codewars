class Dictionary {
  constructor() {
    this.entries = {}
  }

  newEntry(key, value) {
    this.entries[key] = value
  }

  look(key) {
    if (this.entries[key]) {
      return this.entries[key]
    } else {
      return "Can't find entry for " + key
    }
  }
}

let d = new Dictionary()

d.newEntry('Apple', 'A fruit that grows on trees')
d.newEntry('Banana', 'A fruit that is yellow and curved')

console.log(d.look('Apple')) // Выведет "A fruit that grows on trees"
console.log(d.look('Banana')) // Выведет "A fruit that is yellow and curved"
console.log(d.look('Orange')) // Выведет "Can't find entry for Orange"
