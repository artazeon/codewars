var Calculator = {
  average: function () {
    let res = 0

    for (let key in arguments) {
      res += arguments[key] / arguments.length
    }

    return res
  },
}

console.log(Calculator.average(3, 4, 5))
