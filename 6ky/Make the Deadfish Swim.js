function parse(data) {
  const resArr = []
  let count = 0

  for (let i = 0; i < data.length; i++) {
    if (i === data.length || data.charAt(i) === 'o') {
      resArr.push(count)
    }
    if (data.charAt(i) === 'i') {
      count += 1
    }
    if (data.charAt(i) === 'd') {
      count -= 1
    }
    if (data.charAt(i) === 's') {
      count = Math.pow(count, 2)
    }
  }

  return resArr
}

// console.log(parse("iiisdoso"))
console.log(parse('iiisdoso'))
console.log(parse('iiisxxxdoso'))
