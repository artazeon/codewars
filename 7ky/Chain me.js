function add(num) {
  return num + 1
}

function mult(num) {
  return num * 30
}

function chain(input, fs) {
  let res = 0

  for (let i = 0; i < fs.length; i++) {
    i == 0 ? (res = fs[i](input)) : (res = fs[i](res))
  }

  return res
}

console.log(chain(2, [add, mult]))
