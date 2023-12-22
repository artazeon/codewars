Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
  value: function numberOfOccurrences(element) {
    let obj = {}

    for (let i = 0; i < this.length; i++) {
      if (obj[this[i]]) {
        obj[this[i]]++
      } else {
        obj[this[i]] = 1
      }
    }

    return obj[element] ? obj[element] : 0
  },
})

var arr = [0, 1, 2, 2, 3]
console.log(arr.slice().numberOfOccurrences(2))
