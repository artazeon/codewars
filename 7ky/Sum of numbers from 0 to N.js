var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    
    if (count === 0) {
      return '0=0'
    }
    if (count < 0) {
      return `${count}<0`
    }
    
    let sequence = ''
    let sum = 0
    for (let i = 0; i <= count; i++) {
      if (i == count) {
        sequence += i + ' ='
      } else {
        sequence += i + '+'
      }

      sum += i
    }

    return `${sequence} ${sum}`
  }

  return SequenceSum
})()

console.log(SequenceSum.showSequence(6))
console.log(SequenceSum.showSequence(0))
